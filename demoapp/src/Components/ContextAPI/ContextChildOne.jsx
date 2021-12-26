import React from 'react';
import ContextChildTwo from './ContextChildTwo';
import { sendData1 } from './ContextParent';

const ContextChildOne = ({data}) => {
    return (
        <div>
            <h3>Context Child 1</h3>
            <sendData1.Consumer>
              {(second) => {
                  return (
                      <h3>
                    Last name: {second}
                  </h3>
                );
            }}
            </sendData1.Consumer>
            <ContextChildTwo/>
        </div>
    );
};

export default ContextChildOne;