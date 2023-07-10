enum BaseStatusName {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  DISABLED = 'disabled',
}

enum StatusWithoutDisabledName {
  INFO = BaseStatusName.INFO,
  SUCCESS = BaseStatusName.SUCCESS,
  WARNING = BaseStatusName.WARNING,
  ERROR = BaseStatusName.ERROR,
}

enum Duration {
  D75 = 75,
  D100 = 100,
  D150 = 150,
  D200 = 200,
  D300 = 300,
  D500 = 500,
  D700 = 700,
  D1000 = 1000,
} // = 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;

const durationClasses: Record<Duration, string> = {
  [Duration.D75]: 'duration-75',
  [Duration.D100]: 'duration-100',
  [Duration.D150]: 'duration-150',
  [Duration.D200]: 'duration-200',
  [Duration.D300]: 'duration-300',
  [Duration.D500]: 'duration-500',
  [Duration.D700]: 'duration-700',
  [Duration.D1000]: 'duration-1000',
};

enum SizesName {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

enum ColorsName {
  PRIMARY = 'primary',
  GRAY = 'gray',
  INFO = 'info',
  FAILURE = 'failure',
  WARNING = 'warning',
  SUCCESS = 'success',
  BLUE = 'blue',
  CYAN = 'cyan',
  DARK = 'dark',
  GREEN = 'green',
  INDIGO = 'indigo',
  LIGHT = 'light',
  LIME = 'lime',
  PINK = 'pink',
  PURPLE = 'purple',
  RED = 'red',
  TEAL = 'teal',
  YELLOW = 'yellow',
  ORANGE = 'orange',
}

export {
  BaseStatusName,
  ColorsName,
  Duration,
  durationClasses,
  SizesName,
  StatusWithoutDisabledName,
};
