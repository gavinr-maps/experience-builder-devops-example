import { SidebarControllerPositions, ICON_TYPE } from '../config'

export const PREDEFINED_TOGGLE_STYLE = {
  left: {
    default: {
      icon: ICON_TYPE.Left,
      offsetX: 15,
      offsetY: 0,
      position: SidebarControllerPositions.Center,
      iconSize: 14,
      width: 15,
      height: 60,
      color: {
        normal: {
          icon: {
            useTheme: false,
            color: '#FFFFFF'
          },
          bg: {
            useTheme: true,
            color: 'var(--primary)'
          }
        },
        hover: {
          bg: {
            useTheme: true,
            color: 'var(--primary-700)'
          }
        }
      },
      expandStyle: {
        style: {
          borderRadius: '0 92px 92px 0'
        }
      },
      collapseStyle: {
        style: {
          borderRadius: '0 92px 92px 0'
        }
      }
    },
    rect: {
      icon: ICON_TYPE.Left,
      offsetX: 15,
      offsetY: 0,
      position: SidebarControllerPositions.Center,
      iconSize: 14,
      width: 15,
      height: 40,
      color: {
        normal: {
          icon: {
            useTheme: true,
            color: 'var(--primary)'
          },
          bg: {
            useTheme: true,
            color: 'var(--light-400)',
            opacity: 0.6
          }
        },
        hover: {
          bg: {
            useTheme: true,
            color: 'var(--light-400)'
          }
        }
      },
      expandStyle: {
        style: {
          borderRadius: '0 4px 4px 0'
        }
      },
      collapseStyle: {
        style: {
          borderRadius: '0 4px 4px 0'
        }
      }
    }
  },
  right: {
    default: {
      icon: ICON_TYPE.Right,
      offsetX: -15,
      offsetY: 0,
      position: SidebarControllerPositions.Center,
      iconSize: 14,
      width: 15,
      height: 60,
      color: {
        normal: {
          icon: {
            useTheme: false,
            color: '#FFFFFF'
          },
          bg: {
            useTheme: true,
            color: 'var(--primary)'
          }
        },
        hover: {
          bg: {
            useTheme: true,
            color: 'var(--primary-700)'
          }
        }
      },
      expandStyle: {
        style: {
          borderRadius: '92px 0 0 92px'
        }
      },
      collapseStyle: {
        style: {
          borderRadius: '92px 0 0 92px'
        }
      }
    },
    rect: {
      icon: ICON_TYPE.Right,
      offsetX: -15,
      offsetY: 0,
      position: SidebarControllerPositions.Center,
      iconSize: 14,
      width: 15,
      height: 40,
      color: {
        normal: {
          icon: {
            useTheme: true,
            color: 'var(--primary)'
          },
          bg: {
            useTheme: true,
            color: 'var(--light-400)',
            opacity: 0.6
          }
        },
        hover: {
          bg: {
            useTheme: true,
            color: 'var(--light-400)'
          }
        }
      },
      expandStyle: {
        style: {
          borderRadius: '4px 0 0 4px'
        }
      },
      collapseStyle: {
        style: {
          borderRadius: '4px 0 0 4px'
        }
      }
    }
  },
  top: {
    default: {
      icon: ICON_TYPE.Up,
      offsetX: 0,
      offsetY: 15,
      position: SidebarControllerPositions.Center,
      iconSize: 14,
      width: 60,
      height: 15,
      color: {
        normal: {
          icon: {
            useTheme: false,
            color: '#FFFFFF'
          },
          bg: {
            useTheme: true,
            color: 'var(--primary)'
          }
        },
        hover: {
          bg: {
            useTheme: true,
            color: 'var(--primary-800)'
          }
        }
      },
      expandStyle: {
        style: {
          borderRadius: '0 0 92px 92px'
        }
      },
      collapseStyle: {
        style: {
          borderRadius: '0 0 92px 92px'
        }
      }
    },
    rect: {
      icon: ICON_TYPE.Up,
      offsetX: 0,
      offsetY: 15,
      position: SidebarControllerPositions.Center,
      iconSize: 14,
      width: 40,
      height: 15,
      color: {
        normal: {
          icon: {
            useTheme: true,
            color: 'var(--primary)'
          },
          bg: {
            useTheme: true,
            color: 'var(--light-400)',
            opacity: 0.6
          }
        },
        hover: {
          bg: {
            useTheme: true,
            color: 'var(--light-400)'
          }
        }
      },
      expandStyle: {
        style: {
          borderRadius: '0 0 4px 4px'
        }
      },
      collapseStyle: {
        style: {
          borderRadius: '0 0 4px 4px'
        }
      }
    }
  },
  bottom: {
    default: {
      icon: ICON_TYPE.Down,
      offsetX: 0,
      offsetY: -15,
      position: SidebarControllerPositions.Center,
      iconSize: 14,
      width: 60,
      height: 15,
      color: {
        normal: {
          icon: {
            useTheme: false,
            color: '#FFFFFF'
          },
          bg: {
            useTheme: true,
            color: 'var(--primary)'
          }
        },
        hover: {
          bg: {
            useTheme: true,
            color: 'var(--primary-700)'
          }
        }
      },
      expandStyle: {
        style: {
          borderRadius: '92px 92px 0 0'
        }
      },
      collapseStyle: {
        style: {
          borderRadius: '92px 92px 0 0'
        }
      }
    },
    rect: {
      icon: ICON_TYPE.Down,
      offsetX: 0,
      offsetY: -15,
      position: SidebarControllerPositions.Center,
      iconSize: 14,
      width: 40,
      height: 15,
      color: {
        normal: {
          icon: {
            useTheme: true,
            color: 'var(--primary)'
          },
          bg: {
            useTheme: true,
            color: 'var(--light-400)',
            opacity: 0.6
          }
        },
        hover: {
          bg: {
            useTheme: true,
            color: 'var(--light-400)'
          }
        }
      },
      expandStyle: {
        style: {
          borderRadius: '4px 4px 0 0'
        }
      },
      collapseStyle: {
        style: {
          borderRadius: '4px 4px 0 0'
        }
      }
    }
  }
}
