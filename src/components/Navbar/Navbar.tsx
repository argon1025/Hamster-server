import * as React from "react";

class Navbar extends React.Component {
  render() {
    return (
        <div className="flex flwx-row p-5">
          <div>
            <svg
              className="fill-current text-gray-600 w-12"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <ellipse cx="449.475" cy="290.327" rx="7.836" ry="7.821" />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M271.844,147.105c-17.226-3.855-35.213-5.809-53.464-5.809c-111.907,0-197.291,68.01-217.526,173.265
			c-2.666,13.876,0.978,28.083,10.001,38.978c9.035,10.909,22.355,17.166,36.545,17.166h48.727c4.329,0,7.836-3.502,7.836-7.821
			s-3.508-7.821-7.836-7.821H47.4c-9.501,0-18.417-4.188-24.463-11.489c-6.034-7.287-8.473-16.789-6.689-26.067
			c9.117-47.42,32.584-87.565,67.866-116.094c35.984-29.097,82.412-44.476,134.267-44.476c17.098,0,33.933,1.827,50.035,5.431
			c4.219,0.944,8.414-1.706,9.361-5.92C278.723,152.232,276.067,148.05,271.844,147.105z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M300.406,355.063h-95.743v-21.6c0-29.559-18.777-56.087-46.722-66.01l-49.938-17.732
			c-4.075-1.448-8.559,0.677-10.011,4.747c-1.452,4.069,0.679,8.542,4.756,9.99l49.938,17.732
			c21.714,7.71,36.303,28.316,36.303,51.275v21.599h-37.888c-4.329,0-7.836,3.502-7.836,7.821s3.509,7.821,7.836,7.821h149.306
			c4.329,0,7.836-3.502,7.836-7.821S304.735,355.063,300.406,355.063z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M503.695,308.172l-7.231-11.19c-0.002-0.003-0.003-0.005-0.005-0.007l-12.676-19.62
			c-4.079-6.321-8.929-12.014-14.447-17.037c2.838-3.242,4.948-6.991,6.266-11.219c1.198-3.818,1.845-8.405,1.975-14.022
			c0.286-12.176-7.389-22.636-19.098-26.031c-7.761-2.248-15.684-0.916-21.992,3.262c-6.586-8.843-17.55-13.162-28.761-10.899
			c-7.577,1.53-13.867,5.798-17.965,11.702c-16.173-16.435-40.208-36.163-72.594-50.844c-3.94-1.787-8.586-0.046-10.376,3.886
			c-1.79,3.932-0.047,8.568,3.894,10.355c34.58,15.675,58.984,37.515,73.884,53.891c-0.163,5.086,0.161,9.39,0.987,13.091
			c1.613,7.228,5.29,13.411,10.927,18.376c5.315,4.682,12.006,7.17,18.968,7.169c1.945,0,3.911-0.194,5.875-0.589
			c6.641-1.337,12.418-4.81,16.574-9.819c5.13,2.111,9.994,4.808,14.513,8.065c7.242,5.211,13.362,11.648,18.194,19.135
			l8.728,13.509c-12.059,9.973-25.798,27.728-22.975,55.727h-53.62c-2.922-21.99-17.993-40.937-39.347-48.519l-56.786-20.164
			c-4.078-1.448-8.56,0.677-10.012,4.747c-1.449,4.069,0.679,8.542,4.756,9.99l56.786,20.164
			c15.109,5.365,25.958,18.426,28.744,33.783h-34.753c-4.328,0-7.836,3.502-7.836,7.821s3.508,7.821,7.836,7.821h113.404h12.455
			c0.586,0,1.169-0.015,1.748-0.044C497.682,369.75,512,354.918,512,336.814v-0.005v-0.495v-0.004
			C512,326.295,509.127,316.563,503.695,308.172z M427.544,245.986c-1.788,3.699-5.184,6.296-9.315,7.127
			c-4.133,0.832-8.282-0.251-11.372-2.974c-3.146-2.772-5.11-6.059-6-10.05c-0.628-2.813-0.805-6.604-0.527-11.264
			c0.444-7.437,5.719-11.119,10.506-12.086c0.894-0.18,1.839-0.281,2.809-0.281c4.237,0,8.918,1.91,11.615,7.361
			c0.784,1.584,1.459,3.078,2.023,4.478c0.039,0.103,0.076,0.205,0.119,0.307c0.86,2.175,1.455,4.12,1.761,5.802
			c0,0,0,0.001,0,0.002C429.897,238.43,429.368,242.217,427.544,245.986z M460.641,244.437c-0.774,2.482-2.034,4.585-3.833,6.38
			c-3.933-2.458-8.051-4.592-12.327-6.389c0.846-4.186,0.895-8.47,0.102-12.818c-0.281-1.541-0.685-3.147-1.208-4.825
			c3.175-3.317,7.455-3.667,10.732-2.717c3.866,1.12,7.945,4.505,7.8,10.645C461.813,238.788,461.389,242.055,460.641,244.437z
			 M496.326,336.809c0,9.436-7.231,17.222-16.465,18.159c-0.616,0.063-1.241,0.095-1.873,0.095h-5.862
			c-2.522-20.319,5.948-33.831,15.771-42.477l2.63,4.07c3.795,5.865,5.8,12.661,5.8,19.658V336.809z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
          <p className=" text-gray-600 text-2xl pl-3 pt-3 font-semibold ">
            Hamster Dashboard
          </p>
        </div>
    );
  }
}
export default Navbar;
