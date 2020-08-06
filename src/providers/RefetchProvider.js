import React, { createContext, useState, useContext } from 'react';

const RefetchContext = createContext({
  onRefetchToggle: () => {},
});

const RefetchProvider = (props) => {
  const [refetch, setRefetch] = useState(false);

  const onRefetchToggle = () => {
    setRefetch(!refetch);
  };


  return (
    <RefetchContext.Provider
      value={{ refetch, onRefetchToggle }}
      {...props}
    />
  );
};

const useRefetch = () => useContext(RefetchContext);
export { RefetchProvider, useRefetch };