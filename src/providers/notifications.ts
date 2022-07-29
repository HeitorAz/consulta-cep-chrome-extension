import { Toast, ToastType } from '$models/toast';
import { toast } from '$src/stores';

export function showDangerNotification(message: string, duration: number = 3000) {
	showNotification(message, ToastType.Danger, duration);
}

export function showWarningNotification(message: string, duration: number = 3000) {
	showNotification(message, ToastType.Warning, duration);
}

export function showSuccessNotification(message: string, duration: number = 3000) {
	showNotification(message, ToastType.Success, duration);
}

export function showInfoNotification(message: string, duration: number = 3000) {
	showNotification(message, ToastType.Info, duration);
}

let currentTimeout: any = null;

function showNotification(message: string, type: ToastType, duration: number) {
	toast.set(undefined);
	clearTimeout(currentTimeout);
	toast.set(new Toast(message, type, duration));

	currentTimeout = setTimeout(() => {
		toast.set(undefined);
	}, duration);
}
