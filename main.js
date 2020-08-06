const app = new Vue({
 el: "#app",
 data: {
  search: '',
  currentPhoto: null,
  imgHTTP: 'https://www.iter.org/img/',
  photoAlbum: [
{
url: '/all/content/com/gallery/media/1%20-%20back%20in%20time/event_28_july_macron_1.jpg', 
title: "ITER'S START-OF-ASSEMBLY CELEBRATION",
desc: "High-level representatives from all of the ITER Members join (virtually) in ITER's start-of-assembly ceremony on 28 July 2020, hosted by President Emmanuel Macron of France—each one saluting the many achievements, small and large, that have brought the project to this decisive new phase and the one-ITER team that, together, is greater than the sum of its parts.",
date: '28 JULY 2020',
album: 'BACK IN TIME',
},
{
url: '/all/content/com/gallery/media/1%20-%20back%20in%20time/on_site_ceremony_mayors_muselier_1.jpg',
title: "THANKING LOCAL PARTNERS",
desc: "The commitment of local French authorities and elected representatives (past and present) has been critical to ITER's genesis and progress. A concrete example—the creation of a specially adapted Itinerary for the transport of ITER components—was celebrated in the presence of a small number of guests on the day a 400-tonne magnet arrived in 26 June. 'The ITER Itinerary is the vital artery that connects the ITER site to the factories, workshops and laboratories on three continents where machine components and plant systems are being manufactured. It is the project's lifeline.'",
date: "26 JUNE 2020",
album: 'BACK IN TIME',
},
{
url: '/all/content/com/gallery/media/2%20-%20manufacturing%20underway/vvs6_unloading_fos_eb.jpg',
title: "FIRST-OF-A-KIND VACUUM VESSEL SECTOR REACHES FRANCE FROM KOREA",
desc: "On Wednesday 22 July, the first vacuum vessel sector from Korea is unloaded at Marseille harbour—a long and delicate operation that lasts more than two hours. Photo: Emmanuel Bonici",
date: "22 JULY 2020",
album: 'MANUFACTURING UNDERWAY',
},
{
url: '/all/content/com/gallery/media/2%20-%20manufacturing%20underway/cryostat-toplid-ready.jpg',
title: "CRYOSTAT MANUFACTURING COMES TO AN END IN INDIA",
desc: "The segments of the cryostat top lid have been completed at Larsen & Toubro's Hazira, India, factory and prepared for shipment. It is the end of an eight-year industrial adventure to produce the 54 segments of the 3,800-tonne ITER cryostat.",
date: "30 JUNE 2020",
album: 'MANUFACTURING UNDERWAY',
},
{
url: '/all/content/com/gallery/media/3%20-%20life%20at%20iter/ceremony_opens.jpg',
title: "ITER CELEBRATES ASSEMBLY",
desc: "On 28 July 2020, Director-General Bernard Bigot opens the ITER Project's start-of-assembly celebration. 'Constructing the machine is like constructing a giant 3D puzzle with an intricate timeline...We move forward with a deep sense of purpose.'",
date: "28 JULY 2020",
album: 'LIFE AT ITER',
},
{
url: '/all/content/com/gallery/media/3%20-%20life%20at%20iter/composite_flags_masks_small.jpg',
title: "FUSION FAMILY",
desc: "The ITER Organization has been fortunate to have the strong and generous support of its Members during the COVID-19 pandemic. We received recently protective facemasks from our partners in China (ASIPP institute, CNNC and the CNPE consortium) and Korea (KEPCO E&C). These masks are essential to helping the on-site ITER Organization, Domestic Agency and contractor teams to stay safe as they continue to carry out critical operations on site.",
date: "11 MAY 2020",
album: 'LIFE AT ITER',
},
{
url: '/all/content/com/gallery/media/4%20-%20aerial/2020/north_hot_cells_laurent.jpg',
title: "MAY 2020",
desc: "Photo: ITER Organization/EJF Riche",
date: "27 MAY 2020",
album: 'AERIAL',
},
{
url: '/all/content/com/gallery/media/4%20-%20aerial/2020/platform_may_2020_riche_ed_small.jpg',
title: "MAY 2020",
desc: "Photo: ITER Organization/EJF Riche",
date: "27 MAY 2020",
album: 'AERIAL',
},
{
url: '/all/content/com/gallery/media/5%20-%20site%20milestones/nuclear-doors-snc-nov19.jpg',
title: "ALL NUCLEAR DOORS INSTALLED",
desc: "European contractors have finished the installation of 46 nuclear doors in the Tokamak Building. Situated at the end of every port cell around the tokamak at three levels, the doors act as a confinement barrier preventing neutrons and potential contamination from passing through. © Les Nouveaux Médias/SNC ENGAGE",
date: "19 JUNE 2020",
album: 'SITE MILESTONES',
},
{
url: '/all/content/com/gallery/media/5%20-%20site%20milestones/crane_hall_into_assembly_hall_0_small.jpg',
title: "FIRST CRANE ACCESS TO TOKAMAK BUILDING",
desc: "Crane access over the Tokamak pit becomes possible on 28 March 2020, as the ITER Organization, the European Domestic Agency Fusion for Energy, and contractors validate the full crane path—from the Assembly Hall through the entire length of the Tokamak Building—under load. Machine assembly can begin.",
date: "28 MARCH 2020",
album: 'SITE MILESTONES',
},
{
url: '/all/content/com/gallery/media/6%20-%20snapshots/luca_z_56_iter_i_small.jpg',
title: "INDUSTRY THROUGH THE LENS OF AN ARTIST",
desc: "Swiss photographer Luca Zanier sees the artistic in the industrial. As part of an interest in space and energy, he visited ITER in July 2019 and captured this shot of one of ITER's two 800-tonne vacuum vessel assembly tools (from below). 'Strange worlds emanating a cool logic' is how he describes his interest the technical universe of industrial plants. See more at www.zanier.ch. © Luca Zanier",
date: "04 NOVEMBER 2019",
album: 'SNAPSHOTS',
},
{
url: '/all/content/com/gallery/media/6%20-%20snapshots/flags%20jan%202019_3-small.jpg',
title: "COLD AND CRISP",
desc: "The flags of the seven ITER Members--China, the European Union, India, Japan, Korea, Russia and the United States--fly over the worksite on a cold, crisp day in January.",
date: "30 JANUARY 2019",
album: 'SNAPSHOTS',
},
{
url: '/all/content/com/gallery/media/7%20-%20technical/plant_overview02_june2020_sm.jpg',
title: "3D PLANT DRAWING",
desc: "The seven levels of the Tokamak Building house all kinds of equipment, piping, electrical cables, and feed lines for the plant systems of the ITER machine. This 3D drawing gives the clearest idea yet of the complexity of the systems assembly task ahead. © ITER Organization",
date: "15 JUNE 2020",
album: 'TECHNICAL',
},
{
url: '/all/content/com/gallery/media/7%20-%20technical/in-cryostat%20overview%20130116.jpg',
title: "THE LARGEST TOKAMAK IN THE WORLD",
desc: "A cutaway of the ITER Tokamak, produced by the ITER Design Office in January 2013.",
date: "15 JANUARY 2013",
album: 'TECHNICAL',
},
{
url: '/all/content/com/gallery/construction/sitefabricationpfcoils/pf5_before-cold-test_f4e.jpg',
title: "PF5 IN LINE FOR COLD TESTING",
desc: "The fifth poloidal field coil (PF5) is now fully assembled, including protective plates and clamps (18). The next step is cold testing.",
date: "30 JUNE 2020",
album: 'CONSTRUCTION',
},
{
url: '/all/content/com/gallery/construction/sitefabricationpfcoils/pf_24m.jpg',
title: "WINDING STATION SET UP",
desc: "Les stations de travail qui ont servi à la fabrication des bobines PF5 et PF2 sont en cours d'élargissement (de 17 à 24 mètres de diamètre) pour les deux prochaines bobines. La station de bobinage sur la photo tournera bientôt de nouveau pour créer les bobinages de PF4.",
date: "04 JUNE 2020",
album: 'CONSTRUCTION',
},
{
url: '/all/content/com/gallery/media/7%20-%20technical/tkmandplant_2016_72dpi.jpg',
title: "ITER TOKAMAK AND PLANT SYSTEMS, 2016",
desc: "The Tokamak and its plant systems housed in their concrete home. An estimated one million parts will be assembled in the machine alone. Image format: 72dpi - 4500 px width.",
date: "28 APRIL 2016",
album: 'TECHNICAL',
},
{
url: '/all/content/com/gallery/media/7%20-%20technical/iter_mainsite_illustration_final_small.jpg',
title: "HOW ITER CONSTRUCTION PROGRESSES",
desc: "The ITER worksite. In steel grey: the completed buildings; in purple: buildings in progress; in blue: future buildings. © Fusion for Energy 2019",
date: "15 MARCH 2019",
album: 'TECHNICAL',
},
{
url: '/all/content/com/gallery/media/7%20-%20technical/tf_bluebackground_fsu.jpg',
title: "TOROIDAL FIELD CONDUCTOR",
desc: "Jacketed cable for ITER's toroidal field conductor: superconducting and non-superconducting strands surround a central channel for helium.",
date: "12 SEPTEMBER 2013",
album: 'TECHNICAL',
},
{
url: '/all/content/com/gallery/media/4%20-%20aerial/2019/drone_riche_fog-1.jpg',
title: "OCTOBER 2019",
desc: "Photo: ITER Organization/EJF Riche",
date: "25 OCTOBER 2019",
album: 'AERIAL',
},
{
url: '/all/content/com/gallery/construction/tkmcomplex/nuclear_door_port_cell_0_small.jpg',
title: "46 RATHER PARTICULAR DOORS",
desc: "Installed all around the tokamak machine at three levels, these port cell doors double in weight (from 30 to 60 tonnes) when filled with dense, neutron-blocking concrete. The last of 46 doors was installed in June by European Domestic Agency contractors.",
date: "19 JUNE 2020",
album: 'CONSTRUCTION',
},
{
url: '/all/content/com/gallery/construction/tokamakassembly/base_lift_bruno_17_bw-luenig.jpg',
title: "ENGINEERING AS ART 2/3",
desc: "An artistic adaptation of a photo of the cryostat base sitting on hydraulic jacks, by German photographer Christian Luenig. © Christian Luenig (www.arbeitsblende.de)",
date: "27 MAY 2020",
album: 'CONSTRUCTION',
},
{
url: '/all/content/com/gallery/construction/tkmcomplex/cladding_finalized_small.jpg',
title: "CLADDING COMPLETED",
desc: "Metal cladding now completely covers the crane hall of the Tokamak Building.",
date: "26 MAY 2020",
album: 'CONSTRUCTION',
}
],
 filteredAlbum: [],
 },
 methods: {
  overlap(photo) {
   let re = new RegExp(this.search.toLowerCase());
   if (photo.title.toLowerCase().search(re) >= 0) return true
   if (photo.desc.toLowerCase().search(re) >= 0) return true
   if (photo.date.toLowerCase().search(re) >= 0) return true
   return false;
  },
  selectPhoto(photo) {
   this.currentPhoto = photo;

   if (this.currentPhoto !== null) document.querySelector("body").style.overflow = "hidden"
   else document.querySelector("body").style.overflow = "auto"
  },
  nextPhoto() {
    index = this.filteredAlbum.indexOf(this.currentPhoto)
    next = index !== this.filteredAlbum.length - 1 ? index + 1 : 0
    this.currentPhoto = this.filteredAlbum[next]
  },
  prevPhoto() {
    index = this.filteredAlbum.indexOf(this.currentPhoto)
    next = index !== 0 ? index - 1 : this.filteredAlbum.length - 1
    this.currentPhoto = this.filteredAlbum[next]
  }
 },
 watch: {
  search(val) {
   if (val === "") {
    this.filteredAlbum = this.photoAlbum;
    return
   } else {
    this.filteredAlbum = [];
    for (let photo of this.photoAlbum) {
     if (this.overlap(photo)) {
      this.filteredAlbum.push(photo)
     }
    }
   }
  }
 },
 mounted() {
  this.filteredAlbum = this.photoAlbum;
 }
})