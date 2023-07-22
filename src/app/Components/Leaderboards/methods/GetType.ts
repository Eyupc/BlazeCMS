export const GetType = (type: string) => {
  switch (type) {
    case 'credits':
      return 'credits';
    case 'diamonds':
      return 'diamonds';
    case 'duckets':
      return 'duckets';
    case 'achievement_score':
      return 'achievement score';
  }
};
