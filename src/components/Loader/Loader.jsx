import { ColorRing } from 'react-loader-spinner';
import ClipLoader from 'react-spinners/ClipLoader';

export const LoaderColor = () => (
  <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
    wrapperClass="blocks-wrapper"
    colors={['#54ADFF', '#CCE4FB', '#54ADFF', '#CCE4FB', '#54ADFF']}

    // ['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']
  />
);

export const Loader = ({
  size = 40,
  color = '#54ADFF',
  marginTop = '-40px',
  marginBottom = '40px',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: marginTop,
        marginBottom: marginBottom,
      }}
    >
      <ClipLoader
        display="block"
        margin="0 auto"
        color={color}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

// export const Loader = ({
//   size = 40,
//   color = '#54ADFF',
//   marginTop,
//   marginBottom,
// }) => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         marginTop: marginTop,
//         marginBottom: marginBottom,
//       }}
//     >
//       <ClipLoader
//         display="block"
//         color={color}
//         size={size}
//         aria-label="Loading Spinner"
//         data-testid="loader"
//       />
//     </div>
//   );
// };
