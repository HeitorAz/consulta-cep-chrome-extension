import { showNotification } from '$src/providers/notifications';
import { ToastType } from '../models/toast';

/**
 * Copies a string to the clipboard.
 *
 * @async
 * @param {string} text - The text to be copied to the clipboard.
 * @param {string} successText - The toast text to be shown on success.
 * @param {string} errorText - The toast text to be shown on error.
 */
export async function copyToClipboard(
	text: string,
	successText: string = 'Copiado!',
	errorText: string = 'Erro ao copiar!'
): Promise<void> {
	try {
		await navigator.clipboard.writeText(text);
		showNotification(successText, { type: ToastType.Success });
	} catch (err) {
		showNotification(errorText, { type: ToastType.Danger });
	}
}
