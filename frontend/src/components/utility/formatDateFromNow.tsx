import { formatDistanceToNow } from 'date-fns';

export const formatRelativeDate = (date: string | number | Date) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true });
};