import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef, QueryList, ViewChildren, ViewChild } from "@angular/core";
import { gsap } from 'gsap';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent implements AfterViewInit {
  title = 'my-flower-project';
  isYesPressed = false;

  imageUrls: string[] = [
    'assets/floki.png',
    'assets/Mikasa_Ackerman.webp',
    'assets/L_Lawliet.webp',
    'assets/eren_yeager_anime_design.webp',
    'assets/image5.png',
    'assets/image6.png'
  ];

  @ViewChildren('rainImage') rainImages!: QueryList<ElementRef>;
  // Query the container that holds the flower frame
  @ViewChild('container') flowerFrameContainer!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {


    // Gather elements using jQuery (or vanilla JS) selectors:
    if (isPlatformBrowser(this.platformId)) {

      this.rainImages.forEach((img: ElementRef) => {
        // Random horizontal position (ensure the entire image fits in viewport)
        const left = Math.random() * (window.innerWidth - 100); // 100 = image width
        img.nativeElement.style.left = `${left}px`;

        // Random animation delay between 0 and 3 seconds
        const delay = Math.random() * 3;
        img.nativeElement.style.animationDelay = `${delay}s`;

        // Random duration between 2 and 5 seconds
        const duration = 2 + Math.random() * 3;
        img.nativeElement.style.animationDuration = `${duration}s`;
      });
    const strokesLeftBottom = $('#LeftBottomGroup_1_ path[id^=Stroke]').toArray().reverse();
    const strokesLeftTop = $('#LeftTopGroup_1_ path[id^=Stroke]').toArray().reverse();
    const strokesRightBottom = $('#RightBottomGroup_1_ path[id^=Stroke]').toArray().reverse();
    const strokesRightTop = $('#RightTopGroup_1_ path[id^=Stroke]').toArray().reverse();

    const stemGroup1 = ['#Stem2_1_', '#Stem3_1_', '#Stem4_1_', '#Stem5a_1_', '#Stem5b_1_', '#Stem6_1_', '#Stem7a_1_', '#Stem7b_1_', '#Stem7c_1_', '#Stem8_1_'];
    const stemGroup2 = ['#Stem17_1_', '#Stem18_1_', '#Stem19_1_', '#Stem20a_1_', '#Stem20b_1_', '#Stem21_1_', '#Stem22a_1_', '#Stem22b_1_', '#Stem22c_1_', '#Stem23_1_'];
    const stemGroup3 = ['#Stem10_1_', '#Stem11_1_', '#Stem12a_1_', '#Stem12b_1_'];
    const stemGroup4 = ['#Stem26_1_', '#Stem27_1_', '#Stem28a_1_', '#Stem28b_1_'];
    const stemGroup5 = ['#Stem13a_1_', '#Stem13b_1_', '#Stem13c_1_'];
    const stemGroup6 = ['#Stem29a_1_', '#Stem29b_1_', '#Stem29c_1_'];
    const stemVarsFrom = { autoAlpha: 0 };
    const stemVarsTo = { autoAlpha: 1, duration: 0.5, stagger: 0.5 };
    const leafGroup1 = ['#Leaf2_1_', '#Leaf17_1_'];
    const leafGroup2 = ['#Leaf4_1_', '#Leaf5a_1_', '#Leaf5b_1_'];
    const leafGroup3 = ['#Leaf19_1_', '#Leaf20a_1_', '#Leaf20b_1_'];
    const leafGroup4 = ['#Leaf11_1_', '#Leaf12a_1_', '#Leaf12b_1_'];
    const leafGroup5 = ['#Leaf27_1_', '#Leaf28a_1_', '#Leaf28b_1_'];
    const leafGroup6 = ['#Leaf13a_1_', '#Leaf13b_1_', '#Leaf13c_1_'];
    const leafGroup7 = ['#Leaf29a_1_', '#Leaf29b_1_', '#Leaf29c_1_'];

    const budGroup1 = ['#Bud3_1_', '#Bud6_1_'];
    const budGroup2 = ['#Bud18_1_', '#Bud21_1_'];
    const budGroup3 = ['#Bud7a_1_', '#Bud7b_1_', '#Bud7c_1_', '#Bud8_1_'];
    const budGroup4 = ['#Bud22a_1_', '#Bud22b_1_', '#Bud22c_1_', '#Bud23_1_'];
    const budGroup5 = ['#Bud10_1_', '#Bud26_1_'];

    const dots = $('#Dots_1_');

    // Build the GSAP timeline
    const tl = gsap.timeline();

    tl.set('#Footer_group_1_', { autoAlpha: 1 })
      .fromTo(['#Stem16_1_', '#Stem1_1_'], { drawSVG: "0% 0%" }, { duration: 1.5, drawSVG: "0% 100%" }, 'start')
      .fromTo(
        '#BaseGroup16_1_ path',
        { autoAlpha: 1, scale: 0, transformOrigin: '-10% 130%' },
        { duration: 1, scale: 1 },
        'flower1+=1.2'
      )
      .fromTo('#PinkFlowerGroup16_1_', { autoAlpha: 1, scale: 0, transformOrigin: '35% 110%' }, { duration: 2, scale: 1 }, 'flower1-=0.55')
      .fromTo('#BaseGroup1_1_ path',
      { autoAlpha: 1, scale: 0, transformOrigin: '90% 130%' },
      { duration: 1, scale: 1 },
      'flower1+=1.2'
    )

      .fromTo('#PinkFlowerGroup1_1_', { autoAlpha: 1, scale: 0, transformOrigin: '65% 110%' }, { duration: 2, scale: 1 }, 'flower1-=0.55')
      .fromTo(['#Stem9_1_', '#Stem25_1_'], { drawSVG: "0% 0%", autoAlpha: 1 }, { duration: 2, drawSVG: "0% 100%" }, 'flower1+=0.5')
      .fromTo('#BaseGroup9_1_ path', { autoAlpha: 1, scale: 0, transformOrigin: '-10% 130%' }, { duration: 1, scale: 1 }, 'flower2-=0.5')
      .fromTo('#PinkFlowerGroup9_1_', { autoAlpha: 1, scale: 0, transformOrigin: '5% 110%' }, { duration: 2, scale: 1 }, 'flower2')
      .fromTo('#BaseGroup25_1_ path', { autoAlpha: 1, scale: 0, transformOrigin: '105% 130%' }, { duration: 1, scale: 1 }, 'flower2-=0.5')
      .fromTo('#PinkFlowerGroup25_1_', { autoAlpha: 1, scale: 0, transformOrigin: '95% 110%' }, { duration: 2, scale: 1 }, 'flower2')
      // Stems
      .fromTo(stemGroup1, stemVarsFrom, stemVarsTo, 'start+=0.1')
      .fromTo(stemGroup2, stemVarsFrom, stemVarsTo, 'start+=0.1')
      .fromTo(stemGroup3, stemVarsFrom, stemVarsTo, 'flower2-=1.5')
      .fromTo(stemGroup4, stemVarsFrom, stemVarsTo, 'flower2-=1.5')
      .fromTo(stemGroup5, stemVarsFrom, stemVarsTo, 'flower3-=1')
      .fromTo(stemGroup6, stemVarsFrom, stemVarsTo, 'flower3-=1')
      // Leaves
      .fromTo(leafGroup1, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(["80% 45%", "20% 45%"]) }, { duration: 2, scale: 1 }, 'flower1-=1')
      .fromTo(leafGroup2, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(["80% 25%", "60% 35%", "70% 75%"]) }, { duration: 2, stagger: 0.5, scale: 1 }, 'flower1')
      .fromTo(leafGroup3, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(["20% 25%", "40% 35%", "30% 75%"]) }, { duration: 2, stagger: 0.5, scale: 1 }, 'flower1')
      .fromTo(leafGroup4, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(["90% 70%", "100% 100%", "0% 90%"]) }, { duration: 2, stagger: 0.5, scale: 1 }, 'flower2')
      .fromTo(leafGroup5, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(["10% 70%", "0% 100%", "100% 90%"]) }, { duration: 2, stagger: 0.5, scale: 1 }, 'flower2')
      .fromTo(leafGroup6, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(["0% 90%", "10% 50%", "70% 60%"]) }, { duration: 2, stagger: 0.5, scale: 1 }, 'flower3')
      .fromTo(leafGroup7, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(["100% 90%", "90% 50%", "30% 60%"]) }, { duration: 2, stagger: 0.5, scale: 1 }, 'flower3')
      // Buds
      .fromTo(budGroup1, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(['220% -10%', '55% 100%']) }, { duration: 2, scale: 1, stagger: 2.75 }, 'flower1-=0.75')
      .fromTo(budGroup2, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(['-120% -10%', '45% 100%']) }, { duration: 2, scale: 1, stagger: 2.75 }, 'flower1-=0.75')
      .fromTo(budGroup3, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(['10% 110%', '0% 100%', '0% 100%', '80% 100%']) }, { duration: 2, scale: 1, stagger: 0.5 }, 'flower2')
      .fromTo(budGroup4, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(['90% 110%', '100% 100%', '100% 100%', '20% 100%']) }, { duration: 2, scale: 1, stagger: 0.5 }, 'flower2')
      .fromTo(budGroup5, { autoAlpha: 1, scale: 0, transformOrigin: gsap.utils.wrap(['-50% 120%', '150% 120%']) }, { duration: 2, scale: 1 }, 'flower2-=0.5')
      // Strokes
      .fromTo(strokesLeftBottom, stemVarsFrom, { drawSVG: "0% 100%", duration: 2, stagger: 1 }, 1)
      .fromTo(strokesRightBottom, stemVarsFrom, { drawSVG: "0% 100%", duration: 2, stagger: 1 }, 1)
      .fromTo(strokesLeftTop, stemVarsFrom, { drawSVG: "0% 100%", duration: 2, stagger: 1 }, 'flower1+=0.5')
      .fromTo(strokesRightTop, stemVarsFrom, { drawSVG: "0% 100%", duration: 2, stagger: 1 }, 'flower1+=0.5')


      // Dots
      .fromTo(dots, 6, { autoAlpha: 0 }, { autoAlpha: 1, ease: "expo.out" }, 'flower3+=1')
      .fromTo(dots, 5, { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, ease: "expo.out" }, 'flower3');

      // Then add a tween for the center content at the end:
      // At the end of your timeline, after you show the center content:
tl.to('.center-content', {
  autoAlpha: 1,
  duration: 1
}, "+=0.5");

// --- New code for the No button behavior --- //
$('.no-btn').on('mouseenter', function () {
  // Instead of the whole container, select the frame you want to use:
  const $frame = $('.center-content');
  // Get the frame’s dimensions:
  const frameWidth = $frame.width() || 0;
  const frameHeight = $frame.height() || 0;

  const $this = $(this);
  // Get the button’s dimensions:
  const buttonWidth = $this.outerWidth() || 0;
  const buttonHeight = $this.outerHeight() || 0;

  // Compute random positions ensuring the button stays fully inside the frame:
  const randomX = Math.random() * (frameWidth - buttonWidth);
  const randomY = Math.random() * (frameHeight - buttonHeight);

  // Kill any existing tweens on the button:
  gsap.killTweensOf($this);

  // Animate the button to the new (x,y) position.
  gsap.to($this, {
    duration: 0.5,
    x: randomX,
    y: randomY,
    ease: "power2.out"
  });

  // Change the text inside the button (assuming it’s wrapped in a <span>):
  $this.find('span').text('Θες να πεθανεις;');
});

// Optionally revert the text when the pointer leaves:
$('.no-btn').on('mouseleave', function () {
  $(this).find('span').text('Οχι');
});

        }
      }

      onYesClick() {
        this.isYesPressed = true;
      }
}


