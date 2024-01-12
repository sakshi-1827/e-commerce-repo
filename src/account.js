import './account.css';
import Header from './header';
const Account = () => {
	return (
		<>
			<Header />
			<div class="container">
				<div class="row gutters">
					<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
						<div class="card h-100">
							<div class="card-body">
								<div class="account-settings">
									<div class="user-profile">
										<div class="user-avatar">
											<img src="/image/girl2.png" />
										</div>
										{/*<h4>My Account</h4>*/}
										<h5 class="user-name">shakshi doshi</h5>
										<h6 class="user-email">shakshi@gmail.com</h6>
									</div>

								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
						<div class="card h-100">
							<div class="card-body">
								<div class="row gutters">
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<h6 class="mb-2 text-primary">Personal Details</h6>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div class="form-group">
											<label for="first name">First Name :- shakshi</label>

										</div><br></br>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="form-group">
											<label for="last name">Last Name :- Doshi</label>
										</div><br></br>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div class="form-group">
											<label for="eMail">Email :- shakshi@gmail.com</label>
										</div><br></br>
									</div>
									<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
										<div class="form-group">
											<label for="phone">Phone :- 6351060906</label>
										</div><br></br>
									</div>
									<div class="row py-2">
										<div class="col-md-6">
											<label for="country">Country</label>
											<select name="country" id="country" class="bg-light">
												<option value="india" selected>India</option>
												<option value="usa">USA</option>
												<option value="uk">UK</option>
												<option value="uae">UAE</option>
											</select>
										</div>
										<div class="col-md-6 pt-md-0 pt-3" id="lang">
											<label for="language">Language</label>
											<div class="arrow">
												<select name="language" id="language" class="bg-light">
													<option value="english" selected>English</option>
													<option value="english_us">English (United States)</option>
													<option value="enguk">English UK</option>
													<option value="arab">Arabic</option>
												</select>
											</div>
										</div>
									</div><br></br>
								</div>

								<br></br>
								<div class="row gutters">
									<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<div class="text-right">
											<button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
											<button type="button" id="submit" name="submit" class="btn btn-primary">save changes</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
export default Account; 