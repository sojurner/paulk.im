export const particleOptions = (bg: string) => ({
  background: {
    image:
      "url('https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/SvZMOC0XRWYzVcFaU0UB')",
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  backgroundMask: {
    cover: {
      color: {
        value: bg,
      },
      opacity: 1,
    },
    enable: true,
  },
  fullScreen: {
    zIndex: 1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          force: 60,
        },
      },
      onDiv: {
        selectors: '#content-container',
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 1,
        size: 100,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      grab: {
        distance: 400,
      },
      repulse: {
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          // easing: 'ease-out-quad',
          selectors: [],
        },
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: {
        value: '#ffffff',
      },
      distance: 150,
      enable: true,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      // outModes: {
      //   bottom: 'out',
      //   left: 'out',
      //   right: 'out',
      //   top: 'out',
      // },
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    size: {
      value: {
        min: 1,
        max: 30,
      },
      animation: {
        speed: 40,
        minimumValue: 0.1,
      },
    },
  },
});
