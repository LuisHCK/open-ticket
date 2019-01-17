<template>
	<table class="table is-striped is-hoverable is-fullwidth">
		<thead>
			<tr>
				<th></th>
				<th>User</th>
				<th>Organization</th>
				<th>Roles</th>
				<th>Email Address</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in users" :key="'u-tr'+user.id">
				<td>
					<avatar :img="user.avatar" :alt="user.first_name"/>
				</td>
				<td v-text="user.full_name" />
				<td v-text="user.organization.name" />
				<td>
					<div class="tags">
						<span 
							v-for="role in user.roles"
							:key="'role'+role.id"
							class="tag is-small"
							v-text="role.name"/>
					</div>
				</td>
				<td v-text="user.email" />
				<td></td>
			</tr>
		</tbody>
	</table>
</template>
<script>
	import Avatar from '@/components/Avatar.vue'
	export default {
		name: 'people-table',

		props: {
			users: {
				type: Array,
				default: () => {return []}
			}
		},

		components: {
			Avatar
		}
	}
</script>
<style lang="scss"></style>