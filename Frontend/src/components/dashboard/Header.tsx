import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className='db-header'>
      <div className='name'>
        <h1>FitNest</h1>
      </div>

      <div className='h-main'>
        <h3>Dashboard</h3>

        <div className='h-settings'>
          <div className='icons'>
            <img src='../../assets/icons/feedback.png' />
          </div>

          <div className='icons'>
            <img src='../../assets/icons/notification.png' />
          </div>

          {/* profile */}
          <div className='h-profile'>
            <img src='../../assets/images/user-5.png' />

            <div>
              <h4>Johnson Gray</h4>
              <p>johnsongray@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
