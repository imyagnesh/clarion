import React, { PureComponent } from 'react';

const statusHoc = Wrapper => {
  class Status extends PureComponent {
    state = {
      status: [],
    };

    loadingStatus = (processName, id = -1) => {
      this.setState(({ status }) => {
        const index = status.findIndex(
          x => x.process === processName && x.id === id,
        );
        const data = {
          process: processName,
          status: 'loading',
          id,
        };
        if (index === -1) {
          return {
            status: [...status, data],
          };
        }
        return {
          status: [...status.slice(0, index), data, ...status.slice(index + 1)],
        };
      });
    };

    successStatus = (processName, id = -1) => {
      this.setState(({ status }) => ({
        status: status.filter(
          x =>
            !(
              x.process === processName &&
              x.status === 'loading' &&
              x.id === id
            ),
        ),
      }));
    };

    errorStatus = (processName, error, id = -1) => {
      this.setState(({ status }) => {
        const index = status.findIndex(
          x =>
            x.process === processName && x.status === 'loading' && x.id === id,
        );
        return {
          status: [
            ...status.slice(0, index),
            {
              ...status[index],
              status: 'error',
              error,
            },
            ...status.slice(index + 1),
          ],
        };
      });
    };

    render() {
      const { status } = this.state;
      return (
        <Wrapper
          status={status}
          loadingStatus={this.loadingStatus}
          successStatus={this.successStatus}
          errorStatus={this.errorStatus}
          {...this.props}
        />
      );
    }
  }

  return Status;
};

export default statusHoc;
