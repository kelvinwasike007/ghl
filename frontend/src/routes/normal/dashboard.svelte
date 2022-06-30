<script>
    import { goto } from "$app/navigation";
    
    import { loggedIn, privateRoute } from "$lib/auth";
    import { authData } from "../../store/authData";
    import { onMount } from "svelte";
    
    
    import Shell from "../../components/shell.svelte";
    
    onMount(()=>{
      loggedIn() == true ? true : goto("/")
      authData.subscribe(v=>console.log(v))
    })
    
    </script>
    <Shell>
        <div class="row">
            <div class="col-12 grid-margin stretch-card">
              <div class="card corona-gradient-card">
                <div class="card-body py-0 px-0 px-sm-3">
                  
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <div class="d-flex align-items-center align-self-start">
                        <h3 class="mb-0">1</h3>
                        <p class="text-success ms-2 mb-0 font-weight-medium">0 recently joined</p>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="icon icon-box-success ">
                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted font-weight-normal">Normal Accounts</h6>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <div class="d-flex align-items-center align-self-start">
                        <h3 class="mb-0">0</h3>
                        <p class="text-success ms-2 mb-0 font-weight-medium">No broker in program</p>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="icon icon-box-success">
                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted font-weight-normal">Brokers</h6>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <div class="d-flex align-items-center align-self-start">
                        <h3 class="mb-0">KES 0</h3>
                        <p class="text-danger ms-2 mb-0 font-weight-medium">This month</p>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="icon icon-box-danger">
                        <span class="mdi mdi-arrow-bottom-left icon-item"></span>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted font-weight-normal">Sent as Commission</h6>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="row">
                    <div class="col-9">
                      <div class="d-flex align-items-center align-self-start">
                        <h3 class="mb-0">KES 0</h3>
                        <p class="text-success ms-2 mb-0 font-weight-medium">This month</p>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="icon icon-box-success ">
                        <span class="mdi mdi-arrow-top-right icon-item"></span>
                      </div>
                    </div>
                  </div>
                  <h6 class="text-muted font-weight-normal">Total User Lcked Investment</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">PROFIT</h4>
                  <canvas id="transaction-history" class="transaction-chart"></canvas>
                  <div class="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                    <div class="text-md-center text-xl-left">
                      <h6 class="mb-1">Refarrals</h6>
                      <p class="text-muted mb-0">07 Jul 2022, 09:12AM</p>
                    </div>
                    <div class="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                      <h6 class="font-weight-bold mb-0">KES 0</h6>
                    </div>
                  </div>
                  <div class="bg-gray-dark d-flex d-md-block d-xl-flex flex-row py-3 px-4 px-md-3 px-xl-4 rounded mt-3">
                    <div class="text-md-center text-xl-left">
                      <h6 class="mb-1">Inderict Referrals</h6>
                      <p class="text-muted mb-0">07 Jyl 2022, 09:12AM</p>
                    </div>
                    <div class="align-self-center flex-grow text-right text-md-center text-xl-right py-md-2 py-xl-0">
                      <h6 class="font-weight-bold mb-0">KES 0</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <h4 class="card-title mb-1">Recent Activities</h4>
                    <p class="text-muted mb-1">status</p>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="preview-list">
                        <div class="preview-item border-bottom">
                          <div class="preview-thumbnail">
                            <div class="preview-icon bg-primary">
                              <i class="mdi mdi-file-document"></i>
                            </div>
                          </div>
                          <div class="preview-item-content d-sm-flex flex-grow">
                            <div class="flex-grow">
                              <h6 class="preview-subject">New Normal Accounts</h6>
                              <p class="text-muted mb-0">Joined this year</p>
                            </div>
                            <div class="me-auto text-sm-right pt-2 pt-sm-0">
                              <p class="text-muted">15 minutes ago</p>
                              <p class="text-muted mb-0">1 user </p>
                            </div>
                          </div>
                        </div>
                        <div class="preview-item border-bottom">
                          <div class="preview-thumbnail">
                            <div class="preview-icon bg-success">
                              <i class="mdi mdi-cloud-download"></i>
                            </div>
                          </div>
                          <div class="preview-item-content d-sm-flex flex-grow">
                            <div class="flex-grow">
                              <h6 class="preview-subject">Next Automated Commission Reward</h6>
                              <p class="text-muted mb-0">Send Commissions To Brokers and Sub-brokers</p>
                            </div>
                            <div class="me-auto text-sm-right pt-2 pt-sm-0">
                              <p class="text-muted">1 hour ago</p>
                              <p class="text-muted mb-0"></p>
                            </div>
                          </div>
                        </div>
                       
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row ">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Account  Status</h4>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>
                            <div class="form-check form-check-muted m-0">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input">
                              </label>
                            </div>
                          </th>
                          <th> USER </th>
                          <th> CODE </th>
                          <th> INVESTMENT </th>
                          <th> ACCOUNT </th>
                          <th> Payment Mode </th>
                          <th> Start Date </th>
                          <th> Payment Status </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="form-check form-check-muted m-0">
                              <label class="form-check-label">
                                <input type="checkbox" class="form-check-input">
                              </label>
                            </div>
                          </td>
                          <td>
                            <img src="assets/Banner_bg.jpg" alt="image" />
                            <span class="ps-2">JOHN KAMAU</span>
                          </td>
                          <td> 02312 </td>
                          <td> KES 1</td>
                          <td> BROKER </td>
                          <td> P2P </td>
                          <td> 07 Jul 2022 </td>
                          <td>
                            <div class="badge badge-outline-success">Approved</div>
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Shell>