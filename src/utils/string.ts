const createToastIdKey = () => `toast-${Date.now().toString().slice(-9)}`;

export { createToastIdKey };
