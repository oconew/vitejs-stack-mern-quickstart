import SliderPanel from './SilderPanel'
// import "src/lib/hammer.min.js";

// var hammertime = new Hammer(myElement, myOptions);
// hammertime.on("pan", function (ev) {
//   console.log(ev);
// });

function Slider(props: any) {
  // const [offset, setOffset] = useState(0);
  // const MAX = 0;
  // const MIN = -6;
  // const [current, setCurrent] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const type = props.type
  if (type == 'food') {
    const menu = (
      <>
        <div id="pages" className="menu-pages flex">
          <a href="#menu-1">
            <span
              id="menu-bullet-1"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 1"
              aria-current="true"
            />
          </a>
          <a href="#menu-2">
            <span
              id="menu-bullet-2"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 2"
            />
          </a>
          <a href="#menu-3">
            <span
              id="menu-bullet-3"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 3"
            />
          </a>
          <a href="#menu-4">
            <span
              id="menu-bullet-4"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 4"
            />
          </a>
          <a href="#menu-5">
            <span
              id="menu-bullet-5"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 5"
            />
          </a>
          <a href="#menu-6">
            <span
              id="menu-bullet-6"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 6"
            />
          </a>
          <a href="#menu-7">
            <span
              id="menu-bullet-7"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 7"
            />
          </a>
          <span
            id="prev-arrow"
            className="menu-arrow"
            role="button"
            aria-label="Go to previous slide"
            onClick={prevSlide}
          />
          <span
            id="next-arrow"
            className="menu-arrow"
            role="button"
            aria-label="Go to next slide"
            onClick={nextSlide}
          />
        </div>
        <div id="menu" onScroll={checkSlide} className="flex menu-container">
          <SliderPanel
            id="menu-1"
            label="Starters & Sharers"
            cssLabel="starters-sharers"
            link="/menu/starters-sharers"
            n={0}
            current={0}
          />
          <SliderPanel
            id="menu-2"
            label="Mains"
            cssLabel="mains"
            link="/menu/mains"
            n={1}
            current={0}
          />
          <SliderPanel
            id="menu-3"
            label="The Steak Experience"
            cssLabel="steak"
            link="/menu/steak"
            n={2}
            current={0}
          />
          <SliderPanel
            id="menu-4"
            label="Swinging Yakitori Sticks"
            cssLabel="yakitoris"
            link="/menu/yakitori"
            n={3}
            current={0}
          />
          <SliderPanel
            id="menu-5"
            label="Salads & Sides"
            cssLabel="salads-sides"
            link="/menu/salads-sides"
            n={4}
            current={0}
          />
          <SliderPanel
            id="menu-6"
            label="Burgers & Pizzas"
            cssLabel="burgers-pizzas"
            link="/menu/burgers-pizzas"
            n={5}
            current={0}
          />
          <SliderPanel
            id="menu-7"
            label="Sweet Treats"
            cssLabel="desserts"
            link="/menu/desserts"
            n={6}
            current={0}
          />
        </div>
      </>
    )
    return menu
  } else {
    const menu = (
      <>
        <div id="pages" className="menu-pages flex">
          <a href="#menu-1">
            <span
              id="menu-bullet-1"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 1"
              aria-current="true"
            />
          </a>
          <a href="#menu-2">
            <span
              id="menu-bullet-2"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 2"
            />
          </a>
          <a href="#menu-3">
            <span
              id="menu-bullet-3"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 3"
            />
          </a>
          <a href="#menu-4">
            <span
              id="menu-bullet-4"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 4"
            />
          </a>
          <a href="#menu-5">
            <span
              id="menu-bullet-5"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 5"
            />
          </a>
          <a href="#menu-6">
            <span
              id="menu-bullet-6"
              className="menu-page-bullet"
              role="button"
              aria-label="Go to slide 6"
            />
          </a>
          <span
            id="prev-arrow"
            className="menu-arrow"
            role="button"
            aria-label="Go to previous slide"
            onClick={prevSlide}
          />
          <span
            id="next-arrow"
            className="menu-arrow"
            role="button"
            aria-label="Go to next slide"
            onClick={nextSlide}
          />
        </div>
        <div id="menu" onScroll={checkSlide} className="flex menu-container">
          <SliderPanel
            id="menu-1"
            label="Beer & Cider"
            cssLabel="beer-cider"
            link="/menu/beer-cider"
            n={0}
            current={0}
          />
          <SliderPanel
            id="menu-2"
            label="Cocktails"
            cssLabel="cocktails"
            link="/menu/cocktails"
            n={1}
            current={0}
          />
          <SliderPanel
            id="menu-3"
            label="Gin & Tonic"
            cssLabel="gin"
            link="/menu/gin"
            n={2}
            current={0}
          />
          <SliderPanel
            id="menu-4"
            label="Spirits & Liqeurs"
            cssLabel="spirits"
            link="/menu/Spirit"
            n={3}
            current={0}
          />
          <SliderPanel
            id="menu-5"
            label="Wines"
            cssLabel="wines"
            link="/menu/wine"
            n={4}
            current={0}
          />
          <SliderPanel
            id="menu-6"
            label="Soft Drinks"
            cssLabel="soft-drinks"
            link="/menu/soft"
            n={5}
            current={0}
          />
        </div>
      </>
    )
    return menu
  }

  function prevSlide() {
    const menuContainer = document.getElementById('menu')
    // menu at top
    if (menuContainer) {
      if (menuContainer.scrollTop == 0) {
        // scroll to bottom
        menuContainer.scrollTop =
          menuContainer?.scrollHeight - menuContainer?.clientHeight
      } else {
        // otherwise scroll to last menu slide
        menuContainer.scrollTop -= menuContainer?.clientHeight
      }
    }
  }

  function nextSlide() {
    const menuContainer = document.getElementById('menu')
    // menu at bottom
    if (menuContainer) {
      if (
        menuContainer.scrollTop >=
        menuContainer?.scrollHeight - menuContainer?.clientHeight
      ) {
        // scroll back to top
        menuContainer.scrollTop = 0
      } else {
        // otherwise scroll to next menu slide
        menuContainer.scrollTop += menuContainer?.clientHeight
      }
    }
  }

  function checkSlide() {
    const menuContainer = document.getElementById('menu')
    const bullets = document.getElementById('pages')

    if (menuContainer && bullets) {
      const page = Math.round(
        menuContainer.scrollTop / menuContainer.clientHeight,
      )
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      const bullet = document.getElementById('menu-bullet-' + (page + 1))
      for (let i = 1; i < 8; i++) {
        const non = document.getElementById('menu-bullet-' + i)
        if (non) {
          non.ariaCurrent = 'false'
        }
      }
      if (bullet) {
        bullet.ariaCurrent = 'true'
      }
    }
  }

  // function slide(e: KeyboardEvent) {
  //   console.log(e.key);
  // }
}

export default Slider
