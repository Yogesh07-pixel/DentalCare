document.addEventListener("DOMContentLoaded", function () {
  const buttonContainer = document.getElementById("appointment-button");
  if (buttonContainer) {
    buttonContainer.innerHTML = `
     <button class="btn-orange btn-icon">
            <span class="btn-icon-svg"
              ><svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.499878 0.5V17.775C0.499878 18.4872 0.784355 19.1702 1.29072 19.6738C1.79709 20.1775 2.48388 20.4604 3.19999 20.4604H15.509C16.2251 20.4604 16.9119 20.1775 17.4183 19.6738C17.9246 19.1702 18.2091 18.4872 18.2091 17.775V3.18541C18.2091 2.47319 17.9246 1.79014 17.4183 1.28653C16.9119 0.782917 16.2251 0.5 15.509 0.5H4.64237"
                  fill="white"
                />
                <path
                  opacity="0.5"
                  d="M11.5009 7.5654L9.04815 6.40982L6.59541 7.5654V1.40283H11.5009V7.5654Z"
                  fill="#FFCC66"
                />
                <path
                  d="M11.2254 8.47012L9.23253 7.53108C9.18484 7.50883 9.13279 7.49729 9.08011 7.49729C9.02742 7.49729 8.97538 7.50883 8.92768 7.53108L6.93483 8.47012C6.88166 8.49603 6.82272 8.50802 6.76359 8.50499C6.70446 8.50196 6.64708 8.48399 6.59688 8.45278C6.54667 8.42157 6.50528 8.37816 6.47663 8.32662C6.44798 8.27509 6.43301 8.21714 6.43313 8.15826V2.40803C6.43313 2.31613 6.46983 2.22798 6.53517 2.163C6.60051 2.09801 6.68913 2.06152 6.78153 2.06152H11.3752C11.4676 2.06152 11.5562 2.09801 11.6216 2.163C11.6869 2.22798 11.7236 2.31613 11.7236 2.40803V8.15826C11.7234 8.21667 11.7084 8.2741 11.68 8.32521C11.6515 8.37631 11.6105 8.41942 11.5608 8.45053C11.5111 8.48165 11.4543 8.49977 11.3956 8.50319C11.337 8.50662 11.2784 8.49524 11.2254 8.47012Z"
                  stroke="#494949"
                  stroke-width="0.874986"
                  stroke-miterlimit="10"
                />
                <path
                  d="M2.09897 2.05747V18.8837C2.10219 19.5805 2.38347 20.2474 2.88097 20.738C3.37847 21.2286 4.05148 21.5026 4.75204 21.4998H16.8468C17.5474 21.5026 18.2204 21.2286 18.7179 20.738C19.2154 20.2474 19.4967 19.5805 19.4999 18.8837V4.67704C19.4983 4.33213 19.4284 3.9909 19.2942 3.67285C19.16 3.3548 18.9641 3.06613 18.7178 2.82336C18.4714 2.58059 18.1794 2.38847 17.8584 2.25794C17.5373 2.12742 17.1936 2.06108 16.8468 2.06268L10.9484 2.01416"
                  stroke="#494949"
                  stroke-width="0.874986"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M6.59541 13.1685H15.6416"
                  stroke="#4D2C19"
                  stroke-width="0.874986"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M6.59541 15.2476H14.1"
                  stroke="#4D2C19"
                  stroke-width="0.874986"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M6.59541 17.3262H12.0096"
                  stroke="#4D2C19"
                  stroke-width="0.874986"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                /></svg></span
            >Book Appointment
          </button>
    `;
  }
});

const marquee = document.getElementById("statsMarquee");
let scrollAmount = 0;

function scrollMarquee() {
  scrollAmount -= 1;
  if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
    scrollAmount = 0;
  }
  marquee.style.transform = `translateX(${scrollAmount}px)`;
  requestAnimationFrame(scrollMarquee);
}

scrollMarquee();
