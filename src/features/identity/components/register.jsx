import logo from "@assets/images/logo.svg";
const Register = () => {
  return (
    <>
      <div className="main d-flex justify-content-center w-100">
        <main className="content d-flex p-0">
          <div className="container d-flex flex-column">
            <div className="row h-100">
              <div className="col-sam-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div className="d-table-cell align-middle">
                  <div className="text-center mt-4">
                    <img src={logo} style={{ height: "100px" }} />
                    <h1 className="h2">پلتفورم آموزش آنلاین</h1>
                    <p className="lead">
                      جهت استفاده از ویژگی های پلتفرم آموزش آنلاین ثبت نام کنید
                    </p>
                    <p className="lead">
                      قبلا ثبت نام نکرده اید؟
                      <a className="me-2">ورود</a>
                    </p>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="m-sm-4">
                        <from>
                          <div className="mb-3">
                            <label className="from-label">موبایل</label>
                            <input className="form-control form-control-lg" />
                          </div>
                          <div className="mb-3">
                            <label className="from-label">رمز عبور</label>
                            <input
                              className="form-control form-control-lg mb-2"
                              type="password"
                            />
                          </div>
                          <div className="mb-3">
                            <label className="from-label">تکرار رمز عبور</label>
                            <input
                              className="form-control form-control-lg mb-2"
                              type="password"
                            />
                          </div>
                          <div className="text-center mt-3">
                            <button
                              className="btn btn-lg btn-primary"
                              type="submit"
                            >ثبت نام</button>
                          </div>
                        </from>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Register;
