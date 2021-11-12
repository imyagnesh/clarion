import { useState } from 'react';

const useStatus = () => {
  const [status, setstatus] = useState([]);

  const loadingStatus = (processName, id = -1) => {
    setstatus(val => {
      const index = val.findIndex(
        x => x.process === processName && x.id === id,
      );
      const data = {
        process: processName,
        status: 'loading',
        id,
      };
      if (index === -1) {
        return [...val, data];
      }
      return [...val.slice(0, index), data, ...val.slice(index + 1)];
    });
  };

  const successStatus = (processName, id = -1) => {
    setstatus(val =>
      val.filter(
        x =>
          !(x.process === processName && x.status === 'loading' && x.id === id),
      ),
    );
  };

  const errorStatus = (processName, error, id = -1) => {
    setstatus(val => {
      const index = val.findIndex(
        x => x.process === processName && x.status === 'loading' && x.id === id,
      );
      return [
        ...val.slice(0, index),
        {
          ...val[index],
          status: 'error',
          error,
        },
        ...val.slice(index + 1),
      ];
    });
  };

  return {
    status,
    loadingStatus,
    successStatus,
    errorStatus,
  };
};

export default useStatus;
