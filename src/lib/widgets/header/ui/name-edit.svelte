<script lang="ts">
  import { FlatIconButton, TextField } from '$lib/shared/ui';
  import IconEdit from '~icons/material-symbols/edit-outline';
  import { changeUserField, type User } from '$lib/shared/api/users';

  export let user: User;

  let editing = false;

  const changeName = async () => {
    editing = false;
    await changeUserField(user.wallet_id, { field: 'name', value: user.name });
  };

  const changeOnBlur = () => {
    if (editing) changeName()
  };
</script>

<div class="flex items-center">
  {#if editing}
    <form on:submit|preventDefault={changeName}>
      <TextField
        id="name-edit"
        label="Name:"
        labelInline
        autofocus
        on:blur={changeOnBlur}
        bind:value={user.name}
      />
    </form>
  {:else}
    Hello, {user.name}!
    <FlatIconButton label="Edit username" icon={IconEdit} class="ml-2" on:click={() => editing = true} />
  {/if}
</div>
