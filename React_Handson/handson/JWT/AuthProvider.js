
// Frontend Code

import {
  createContext,
  useContext,
  useState,
  useEffect
} from 'react';


import api from '@/api';

const AuthContext = createContext(undefined);



export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return authContext;
};




export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // On mount, check if user is authenticated via refresh token
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await api.get('/api/me');
        setToken(response.data.accessToken);
      } catch (err) {
        setToken(null);
      }
    };

    fetchMe();
  }, []);


  // Add Authorization header to every request
  useEffect(() => {
    const authInterceptor = api.interceptors.request.use((config) => {
      if (!config._retry && token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  
  // Handle automatic refresh token logic
  useEffect(() => {
    const refreshInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (
          error.response?.status === 401 &&
          error.response?.data?.message === 'Unauthorized' &&
          !originalRequest._retry
        ) {
          try {
            const response = await api.get('/api/refreshToken');

            setToken(response.data.accessToken);
            originalRequest._retry = true;
            originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;

            return api(originalRequest);
          } catch (err) {
            setToken(null);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(refreshInterceptor);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
