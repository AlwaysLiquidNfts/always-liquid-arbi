<template>
  <Head>
    <Title>Activity Points | {{ $config.projectMetadataTitle }}</Title>
    <Meta property="og:title" :content="'Activity Points | ' + $config.projectMetadataTitle" />
  </Head>

  <div class="card border scroll-500">
    <div class="card-body">
      <p class="fs-3" @click="$router.back()">
        <i class="bi bi-arrow-left-circle cursor-pointer"></i>
      </p>

      <h3 class="mb-3 mt-3">Activity Points</h3>

      <p class="text-break mt-3">
        Your current Activity Points balance:
      </p>

      <!-- Input field -->
      <div class="row">
      <div class="col-md-5">
        <div class="input-group">
          <input 
            :value="userStore.getCurentUserActivityPoints"
            type="text"
            class="form-control"
            disabled
          >

          <button class="btn btn-primary disabled" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Activity Points
          </button>
        </div>
      </div>
      </div>

      <p class="text-break mt-4 mb-3">
        By actively using {{ $config.projectName }} features, you can earn more Activity Points.
      </p>

    </div>
  </div>
</template>

<script>
import { useEthers } from 'vue-dapp';
import { useUserStore } from '~/store/user';
import { getActivityPoints } from '~/utils/balanceUtils';

export default {
  name: 'ActivityPoints',

  mounted() {
    this.fetchActivityPoints();
  },

  methods: {
    getActivityPoints,

    async fetchActivityPoints() {
      if (this.$config.activityPointsAddress && this.address) {
        const activityPoints = await this.getActivityPoints(this.address);
        this.userStore.setCurrentUserActivityPoints(activityPoints);
      }
    }
  },

  setup() {
    const { address } = useEthers();
    const userStore = useUserStore();

    return { address, userStore }
  },
}
</script>