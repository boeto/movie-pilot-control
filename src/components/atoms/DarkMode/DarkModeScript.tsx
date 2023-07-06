import { FC } from 'react';

export const DarkModeScript: FC = () => (
  <script
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: /* html */ `
            (function () {
              function setMode(newMode) {
                window.__mode = newMode;
                if (newMode === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (newMode === 'light') {
                  document.documentElement.classList.remove('dark');
                }
              }
  
              let preferredMode;
              try {
                preferredMode = localStorage.getItem('mode');
              } catch (err) { }
  
              window.__setPreferredMode = function(newMode) {
                preferredMode = newMode;
                setMode(newMode);
                try {
                  localStorage.setItem('mode', newMode);
                } catch (err) { }
              };
  
              let initialMode = preferredMode;
              let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
              if (!initialMode) {
                initialMode = darkQuery.matches ? 'dark' : 'light';
              }
              setMode(initialMode);
  
              darkQuery.addEventListener('change', function (e) {
                if (!preferredMode) {
                  setMode(e.matches ? 'dark' : 'light');
                }
              });
  
            })();
          `,
    }}
  />
);
