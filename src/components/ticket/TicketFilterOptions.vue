<template>
	<div class="ticket-filter-options panel">
    <div class="is-size-6 has-text-weight-semibold">Filter</div>
<hr>
    <div class="form">
      <b-field custom-class="is-size-7" label="Cateogry">
        <b-select @input="changeState($event, 'category')" size="is-small" placeholder="Select ticket category" expanded>
          <option value="problem">Problem</option>
          <option value="error">Error</option>
          <option value="question">Question</option>
          <option value="bug_report">Bug Report</option>
          <option value="feature_request">Feature request</option>
        </b-select>
      </b-field>

      <b-field custom-class="is-size-7" label="Status">
        <b-select @input="changeState($event, 'status')" size="is-small" placeholder="Select ticket status" expanded>
          <option value="open">Open</option>
          <option value="pending">Pending</option>
          <option value="resolved">Resolved</option>
          <option value="waiting_customer">Waiting on Customer</option>
          <option value="waiting_third_party">Waiting on third party</option>
        </b-select>
      </b-field>

      <b-field custom-class="is-size-7" label="Priority">
        <b-select @input="changeState($event, 'priority')" size="is-small" placeholder="Select ticket priority" expanded>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </b-select>
      </b-field>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'ticket-filter-options',

		methods: {
			changeState(value, field) {
				this.$http.get('tickets', {
					params: {
						[field]: value
					}
				})
			}
		},
	}
</script>