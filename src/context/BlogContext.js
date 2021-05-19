import React from 'react';
import { Text } from 'react-native';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
  return <BlogContext.Provider>
    {children}
  </BlogContext.Provider>
};

export default BlogContext;