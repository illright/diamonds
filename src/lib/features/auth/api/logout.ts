import { goto } from '$app/navigation';
import { peer as peerStore, user as userStore, wallet as walletStore } from '$lib/entities/user';
import { removeKeys } from '../../../../utils/ton';

export const logout = () => {
	removeKeys();

	peerStore.set(null);
	userStore.set(null);
	walletStore.set(null);

	goto('/');
};