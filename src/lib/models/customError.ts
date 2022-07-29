import type { ToastType } from './toast';

export class CustomError extends Error {
	constructor(
		message: string,
		public code: number,
		public toastType: ToastType,
		public toastMessage: string = message
	) {
		super(message);
	}
}
