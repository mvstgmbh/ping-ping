import React from 'react';

export const useGetHeaderAndFooterHeight = () => {
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const [footerHeight, setFooterHeight] = React.useState(0);

  React.useEffect(() => {
    const header = document.getElementById('header');
    const footer = document.getElementById('navbar');

    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    if (footer) {
      setFooterHeight(footer.offsetHeight);
    }
  }, []);

  return { headerHeight, footerHeight };
};
