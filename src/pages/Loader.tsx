import { ColorRing } from 'react-loader-spinner';

export const Loader = () => (
  <div style={{display: 'flex',
    justifyContent: 'center',}}>
    <ColorRing
      visible={true}
      height="120"
      width="120"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#caada7', '#a27065', '#874739', '#7a3323', '#62291c']}
    />
  </div>
);
