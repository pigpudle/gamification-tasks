import ITranslation from './ITranslation';

const enTranslation: ITranslation = {
  locale: 'en',
  translations: {
    general: {
      completedAt: 'Completed at',
      submit: 'Submit',
      xpValue: 'Value (in experience points)',
      title: 'Title',
      menu: 'Menu',
      add: 'Add',
      language: 'Language',
      completed: 'Completed',
      caution: 'Caution',
      cancel: 'Cancel',
      ok: 'OK',
      notFound: 'Not Found',
    },
    category: {
      name: {
        single: 'Category',
        multiple: 'Categories',
      },
    },
    task: {
      name: {
        single: 'Task',
        multiple: 'Tasks',
      },
      complete: 'Complete',
      addCategoriesFirst: 'Add categories first',
    },
    reward: {
      name: {
        single: 'Reward',
        multiple: 'Rewards',
      },
      pick: 'Pick',
      timeToPick: 'You can pick your reward',
    },
    subtask: {
      name: {
        single: 'Subtask',
        multiple: 'Subtasks',
      },
    },
    settings: {
      name: 'Settings',
      databaseSize: 'Database size',
      deleteDatabase: 'Delete database',
      levelSize: 'XP in level',
      changeLevelSizeWarning: `Changing this setting will reset your current level progress. 
      Your level and gained XP will stay the same, but the level progress bar will be set to zero. Are you sure to proceed?`,
      editLevelSize: 'Edit Level Size',
    },
    level: {
      name: 'Level',
      xp: 'Experience points (XP)',
      reached: 'Reached',
    },
    repetitiveTask: {
      name: {
        single: 'Repetitive task',
        multiple: 'Repetitive Tasks',
      },
    },
    achievements: {
      name: {
        single: 'Achievement',
        multiple: 'Achievements',
      },
      completed: 'Achievement got',
      completedMessage: 'You have got achievement',
      1: {
        title: 'Reach 10th level',
        message: 'Reach 10th level to get this achievement.',
      },
      2: {
        title: 'Complete 10 tasks',
        message: 'Complete 10 tasks to get this achievement.',
      },
    },
    error: {
      dbNotInitialized: 'The database is not initialized',
    },
    developerSettings: {
      name: 'Developer Settings',
    },
    progress: {
      name: 'Progress',
    },
  },
};

export default enTranslation;
