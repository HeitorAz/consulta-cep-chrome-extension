import { showDangerNotification, showSuccessNotification } from '$src/providers/notifications';

export async function copyToClipboard(
	text: string,
	successText: string = 'Copiado!',
	errorText: string = 'Erro ao copiar!'
): Promise<void> {
	try {
		await navigator.clipboard.writeText(text);
		showSuccessNotification(successText);
	} catch (err) {
		showDangerNotification(errorText);
	}
}
