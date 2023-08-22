import Notiflix from 'notiflix';
export const Error = () => {
  return Notiflix.Report.failure(
    'Sorry',
    ' an error ocuured, try again, please',
    'Ok',
    {
      width: '360px',
      svgSize: '40px',
      titleFontSize: '28px',
      messageFontSize: '20px',
      buttonFontSize: '20px',
    }
  );
};