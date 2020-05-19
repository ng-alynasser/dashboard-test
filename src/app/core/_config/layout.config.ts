import { LayoutConfigModel } from '../_base/layout';

export class LayoutConfig {
  public defaults: LayoutConfigModel = {
    "name": "printira-superadmin-dashboard",
    "js": {
      "breakpoints": {
        "sm": 576,
        "md": 768,
        "lg": 992,
        "xl": 1200,
        "xxl": 1200
      },
      "colors": {
        "theme": {
          "base": {
            "white": "#ffffff",
            "primary": "#6993FF",
            "secondary": "#E5EAEE",
            "success": "#1BC5BD",
            "info": "#8950FC",
            "warning": "#FFA800",
            "danger": "#F64E60",
            "light": "#F3F6F9",
            "dark": "#212121"
          },
          "light": {
            "white": "#ffffff",
            "primary": "#E1E9FF",
            "secondary": "#ECF0F3",
            "success": "#C9F7F5",
            "info": "#EEE5FF",
            "warning": "#FFF4DE",
            "danger": "#FFE2E5",
            "light": "#F3F6F9",
            "dark": "#D6D6E0"
          },
          "inverse": {
            "white": "#ffffff",
            "primary": "#ffffff",
            "secondary": "#212121",
            "success": "#ffffff",
            "info": "#ffffff",
            "warning": "#ffffff",
            "danger": "#ffffff",
            "light": "#464E5F",
            "dark": "#ffffff"
          }
        },
        "gray": {
          "gray100": "#F3F6F9",
          "gray200": "#ECF0F3",
          "gray300": "#E5EAEE",
          "gray400": "#D6D6E0",
          "gray500": "#B5B5C3",
          "gray600": "#80808F",
          "gray700": "#464E5F",
          "gray800": "#1B283F",
          "gray900": "#212121"
        }
      },
      "fontFamily": "Poppins"
    },
    "self": {
      "layout": "default",
      "logo": "./assets/media/logos/printira-logo-full.svg",
    },
    "page-loader": {
      "type": "spinner-message"
    },
    "header": {
      "self": {
        "display": true,
        "width": "fluid",
        "theme": "light",
        "fixed": {
          "desktop": true,
          "mobile": true
        }
      },
      "menu": {
        "self": {
          "display": false,
          "layout": "tab",
          "rootArrow": true,
          "icon-style": "duotone"
        },
        "desktop": {
          "arrow": true,
          "toggle": "click",
          "submenu": {
            "theme": "light",
            "arrow": true
          }
        },
        "mobile": {
          "submenu": {
            "theme": "light",
            "accordion": true
          }
        }
      }
    },
    "subheader": {
      "display": false,
      "displayDesc": false,
      "displayDaterangepicker": false,
      "layout": "subheader-v1",
      "fixed": false,
      "width": "fluid",
      "clear": false,
      "style": "solid"
    },
    "content": {
      "width": "fixed"
    },
    "brand": {
      "self": {
        "theme": "light"
      }
    },
    "aside": {
      "self": {
        "theme": "light",
        "display": true,
        "fixed": true,
        "minimize": {
          "toggle": true,
          "default": false,
          "hoverable": true
        }
      },
      "footer": {
        "self": {
          "display": true
        }
      },
      "menu": {
        "dropdown": false,
        "scroll": false,
        "icon-style": "duotone",
        "submenu": {
          "accordion": true,
          "dropdown": {
            "arrow": true,
            "hover-timeout": 500
          }
        }
      }
    },
    "footer": {
      "width": "fluid",
      "fixed": false
    },
    "extras": {
      "search": {
        "display": true,
        "layout": "dropdown",
        "offcanvas": {
          "direction": "right"
        }
      },
      "notifications": {
        "display": false,
        "layout": "dropdown",
        "dropdown": {
          "style": "dark"
        },
        "offcanvas": {
          "direction": "right"
        }
      },
      "user": {
        "display": true,
        "layout": "offcanvas",
        "dropdown": {
          "style": "dark"
        },
        "offcanvas": {
          "direction": "right"
        }
      },
      "languages": {
        "display": false
      },
      "cart": {
        "display": false,
        "dropdown": {
          "style": "dark"
        }
      },
      "quick-actions": {
        "display": false,
        "layout": "dropdown",
        "dropdown": {
          "style": "dark"
        },
        "offcanvas": {
          "direction": "right"
        }
      },
      "quick-panel": {
        "display": true,
        "offcanvas": {
          "direction": "right"
        }
      },
      "chat": {
        "display": false
      },
      "toolbar": {
        "display": true
      },
      "scrolltop": {
        "display": true
      }
    }
  };

  /**
   * Good place for getting the remote config
   */
  public get configs(): LayoutConfigModel {
    return this.defaults;
  }
}
