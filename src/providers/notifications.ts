import { Toast, ToastType } from '$models/toast';
import { toast } from '$src/stores';

type ToastOptions = {
	type: ToastType;
	duration: number;
};

const DEFAULT_OPTIONS: ToastOptions = {
	type: ToastType.Info,
	duration: 3000
};

let currentTimeout: any = null;

/**
 * Shows a toast notification.
 * @param {string} message - The message shown in the body of the toast.
 * @param {ToastOptions} options - The options for the toast.
 */
export function showNotification(
	message: string,
	options: Partial<ToastOptions> = { type: ToastType.Info, duration: 3000 }
): void {
	const opt = Object.assign(DEFAULT_OPTIONS, options);
	toast.set(undefined);
	clearTimeout(currentTimeout);
	toast.set(new Toast(message, opt.type, opt.duration));

	currentTimeout = setTimeout(() => {
		toast.set(undefined);
	}, opt.duration);
}
