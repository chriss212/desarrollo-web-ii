export const createNotificationSlice = (set) => ({
    notifications: [],

    addNotification: (message, type = "info") => {
        const id = Date.now();
        set((state) => ({
            notifications: [...state.notifications, { id, message, type }],
        }));

        setTimeout(() => {
            set((state) => ({
                notifications: state.notifications.filter((notification) => notification.id !== id),
            }));
        }, 5000);
    },
});
