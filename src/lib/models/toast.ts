export enum ToastType {
	Success = 'success',
	Danger = 'danger',
	Warning = 'warning',
	Info = 'info'
}

export class Toast {
	constructor(public message: string, public type: ToastType, public duration: number = 3000) {}
}
