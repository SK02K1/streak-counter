import { formattedDate, Streak, buildStreak, updateStreak } from './utils';

const KEY = 'streak';

function shouldIncrementOrResetStreakCount(
  currentDate: Date,
  lastLoginDate: string
): 'increment' | 'reset' | 'none' {
  // We get 11/5/2021
  // so to get 5, we split on / and get the second item
  const difference =
    currentDate.getDate() - parseInt(lastLoginDate.split('/')[1]);
  // This means they logged in the day after the currentDate
  if (difference === 1) {
    return 'increment';
  }
  if (difference === 0) {
    return 'none';
  }
  // Otherwise they logged in after a day, which would
  // break the streak
  return 'reset';
}

export function streakCounter(storage: Storage, date: Date): Streak {
  const streakInLocalStorage = storage.getItem(KEY);
  if (streakInLocalStorage) {
    try {
      const streak = JSON.parse(streakInLocalStorage) as Streak;
      const state = shouldIncrementOrResetStreakCount(
        date,
        streak.lastLoginDate
      );
      const SHOULD_INCREMENT = state === 'increment';
      const SHOULD_RESET = state === 'reset';

      if (SHOULD_INCREMENT) {
        const updatedStreak = buildStreak(date, {
          startDate: streak.startDate,
          currentCount: streak.currentCount + 1,
          lastLoginDate: formattedDate(date),
        });
        // store in localStorage
        updateStreak(storage, updatedStreak);
        return updatedStreak;
      }

      if (SHOULD_RESET) {
        const updatedStreak: Streak = buildStreak(date);
        updateStreak(storage, updatedStreak);
        return updatedStreak;
      }

      return streak;
    } catch (error) {
      console.error('Failed to parse streak from localStorage');
    }
  }

  const streak = buildStreak(date);

  // store in localStorage
  updateStreak(storage, streak);

  return streak;
}
