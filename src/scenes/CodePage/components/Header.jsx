import { FormattedMessage } from 'react-intl';

const Header = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#fff', fontSize: '26px', fontWeight: '600' }}>
        <FormattedMessage id="qr_h1" />
      </h1>
    </div>
  );
};

export default Header;
