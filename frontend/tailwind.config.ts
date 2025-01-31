/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxxs: '.5rem', //8px
        xxs: '.625rem', // 10px
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        base: '1rem', // 16px
        md: '1.125rem', // 18px
        lg: '1.25rem', // 20px
        xl: '1.375rem', //22px
        '2xl': '1.5rem', //24px
        '3xl': '1.875rem', //30px
        '4xl': '2rem', //32px
        '4.5xl': '2.25rem', //36px
        '5xl': '2.5rem', //40px
        '5.5xl': '3rem', //48px
        '6xl': '3.5rem', //56px
        '7xl': '4.5rem', //72px
        '7.5xl': '80px',
        '8xl': '6.875rem', //110px
        '9xl': '7.5rem', //120px
      },
      fontFamily: {
        body: ['var(--font-manrope)'],
      },
      lineHeight: {
        '0.5': '2px',
        '3.25': '13px',
        '3.75': '15px',
        '7.5': '30px',
        '8.75': '35px',
        '9.5': '38px',
        '11': '44px',
        '12.5': '50px',
        '14.5': '58px',
      },
      zIndex: {
        5: 5,
        35: 35,
        40: 40,
        90: 90,
        100: 100
      },
      colors: {
        primary: '#00B2ED',
        secondary: '#6532B3',
        black: {
          DEFAULT: '#000000',
          50: '#00000026',
          100: '#001515',
          150: '#0000001f',
          200: '#272727',
          250: '#2B2B2B',
          300: '#707070',
          350: '#262626',
          400: '#636468',
          500: '#1A202C',
          600: '#5B5B5B',
          700: '#666666',
          800: '#707070',
          850: '#1A1A1A',
          900: ' #4a4a4a',
          950: '#252F3F',
          1000: '#4B5563',
          1050: '#383535',
          1100: '#383838',
          1150: '#747474',
        },
        gray: {
          DEFAULT: '#FCFBF9',
          50: '#374151',
          100: '#F1F2F6',
          150: '#ABABAB',
          200: '#B4BBC6',
          250: '#EDEDED',
          300: '#E1E1E1',
          350: '#919191',
          400: '#E6E6E6',
          450: '#505050',
          500: '#878787',
          550: '#8B8B8B',
          600: '#E0E0E0',
          650: '#838383',
          700: '#E9ECF0',
          750: '#818181',
          800: '#828282',
          850: '#989898',
          900: '#F3F3F3',
          950: '#A3A3A3',
          1000: '#656565',
          1050: '#6D6D6D',
          1100: '#AFAFAF',
          1150: '#F8F8F8',
          1200: '#565656',
          1250: '#949494',
          1300: '#ACACAC'
        },
        white: {
          DEFAULT: '#fff',
          100: '#F4F4F4',
          200: '#E5E5E5',
          300: '#F5F5F5',
          350: '#7B7B7B',
          400: '#7D7D7D',
          500: '#D7D4D4',
          600: '#F7EDE9',
          700: '#D1D1D1',
          800: '#CBD5E0',
          900: '#A5ACB8',
          950: 'rgba(26, 26, 26, 0.25)',
        },
        offwhite: {
          DEFAULT: '#DDDEE1',
          100: '#D4D4D4',
          150: '#D9D9D9',
          200: '#707070',
          250: '#BEBDBD',
          300: '#A5A5A5',
          400: '#545454',
          450: '#03030333',
          500: '#757575',
          600: '#BFBFBF',
          650: '#BBB',
          700: '#CCCCCC',
          750: '#EEEEEE',
          800: '#525252',
          850: '#FF9090',
          900: '#737373',
          1000: '#595959',
        },
        blue: {
          DEFAULT: '#1A1F36',
          100: '#90CDF4',
          200: '#4299E1',
          250: '#077296',
          300: '#E4E8EE',
          350: '#6985A7',
          400: '#008DBC',
          500: '#015774',
          600: '#EDFBFF',
          700: '#CFD4FF',
          800: '#002365',
          900: '#C7FFF5F9',
          1000: '#DAE2FFFE',
        },
        skyBlue: {
          DEFAULT: '#00B2ED',
          50: '#D9F3FC',
          100: '#EDFAFE',
          150: '#5FA6BC',
          200: '#00B2ED',
          300: '#EDFAFE',
          400: '#004B74',
          500: '#BAC6C9',
          600: '#6282B3',
          700: '#E8F9FF',
          800: 'rgba(0, 178, 237, 0.16)',
          900: '#006587',
        },
        yellow: {
          DEFAULT: '#FEF200',
          20: '#FCFFEB',
          30: '#F9EDB3',
          50: '#CBB081',
          100: '#F7FF00',
          200: '#FFFB7B',
          300: '#FFCE44',
          400: '#FFF600',
          450: '#FFF87A',
          500: '#FFEC72',
          600: '#E5E6CF',
          700: '#F3E8B9',
          800: '#FFD1C2',
          900: '#EDB418',
          1000: '#FFE0B5',
          1050: '#FFF5EB',
        },
        green: {
          DEFAULT: '#0CEDAA',
          100: '#B7FCAF',
          200: '#01685C',
          300: '#E6FFFB',
          350: '#E2FFD5',
          400: '#CFFF92',
          500: '#10909E',
          600: '#CAFFEF',
          700: '#C8FFF2',
        },
        warning: {
          DEFAULT: '#FFE6D1',
        },
        error: {
          DEFAULT: '#FF0000',
        },
        pink: {
          DEFAULT: '#F5EAF9',
          100: '#FEDCDE',
          200: '#EB5757',
          300: '#F3F4FF',
          400: '#FFE6FF',
          500: '#FFDCDE',
          600: '#FF7C7C',
        },
        purple: {
          DEFAULT: '#DBCDFF',
          100: '#F7F3FF',
        },
        cream: {
          DEFAULT: '#FFF5DB',
        },
      },
      spacing: {
        '0.75': '3px',
        '3.5': '14px',
        '4.5': '18px',
        '7.5': '30px',
        '12.5': '50px',
        '15': '60px',
        '17.5': '70px',
        '18.5': '74px',
        '19.5': '78px',
        '25': '100px',
        '27': '108px',
        '27.5': '110px',
        '35': '140px',
        '44': '176px',
        '50': '200px',
        '50.5': '202px',
        '56': '224px',
        '65': '260px',
        '67.5': '270px',
        '70': '280px',
        '82': '328px',
        '86': '344px',
        '92': '368px',
        '105': '420px',
        '109': '436px',
        '120': '480px',
        '124': '496px',
        '129': '516px',
        '140': '560px',
        '145': '580px',
        '159': '636px',
        '174': '696px',
        '181': '724px',
        '240': '960px',
        '290': '1160px',
        '200': '50rem' //800px

      },
      minHeight: {
        '97.5': '390px'
      },
      maxWidth: {
        '8/12' : '66%',
        '10/12' :'83%'
      },
      borderWidth: {
        '3': '3px',
        '10': '10px'
      },
      borderRadius: {
        '1.75': '7px'
      },
      shadow : {
        'xl' : '1px 1px 4px #ccc',
       '2xl': '0px 8px 20px 0px #0000001A',

      },

      animation: {
        'fadeIn-Slow': 'fadeIn 4s forwards',
        'fadeOut-Slow': 'fadeOut 4s forwards',
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
        fadeIn: 'fadeIn 2s forwards',
        pendulum: ' moveIt 2.5s ease-in-out infinite;',
        'swing-slow': 'swing 3s linear infinite',
        'swing-once': 'swingOnce 0.5s linear forwards',
        hanging: 'hanging 2s infinite',
        bounceSlow: 'bounceSlow 2s infinite',
        numberCounting: 'move .5s forwards',
        fadeInRight: 'fadeInFromRight 1s ease-in-out',
        fadeInTop: 'fadeInFromTop 2s ease-in-out',
        fadeInBottom: 'fadeInFromBottom 2s ease-in-out',
        hideHeroImage: 'hideHero 1s forwards',
        hideHeroGoodReadsImage: 'hideHeroGoodReads 1s forwards',
        flickerHide: 'hideContent .1s forwards 1s',
      },
      backgroundImage: {
        'black-grad': 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 64.36%, rgba(0, 0, 0, 0.60) 100%, lightgray 50%)',
        'search-grad' :'linear-gradient(90deg, #00B2ED 0%, rgba(0, 178, 237, 0) 92%, rgba(0, 178, 237, 0) 100%);'
      },
      screens: {
        sm: '360px',
        // => @media (min-width: 360px) { ... }

        md: '360px',
        // => @media (min-width: 360px) { ... }

        lg: '768px',
        // => @media (min-width: 768px) { ... }

        xlg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [

    function ({ addComponents }: any) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',

          '@screen sm': {
            maxWidth: '370px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
          },
          '@screen md': {
            maxWidth: '370px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
          },
          '@screen lg': {
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
          },
          '@screen xl': {
            maxWidth: '1200px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
          },
        },
      });
    },
  ],
};
