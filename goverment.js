const malaysianMinistries = [
    {
        link: "https://www.pmo.gov.my/",
        title: "Prime Minister's Office (PMO)",
        description: "Coordinates the functions of government ministries and agencies. It oversees key administrative and policy implementation, including national security, economic planning, and public service delivery."
    },
    {
        link: "https://www.kpkm.gov.my/en/home",
        title: "Ministry of Agriculture and Food Security (KPKM)",
        description: "Develops policies for agriculture and ensures a stable food supply. It supports farmers, promotes sustainable practices, and drives growth in the agricultural sector to meet national food demands."
    },
    {
        link: "https://www.komunikasi.gov.my/",
        title: "Ministry of Communications",
        description: "Oversees the nation's communication and multimedia sector. It regulates broadcasting, telecommunications, and digital content, while promoting freedom of information and creative industry growth."
    },
    {
        link: "https://www.mod.gov.my/",
        title: "Ministry of Defence (MINDEF)",
        description: "Responsible for safeguarding Malaysia’s sovereignty and national security. It formulates defence policies, manages the armed forces, and coordinates national defence strategies."
    },
    {
        link: "https://www.digital.gov.my/en-GB",
        title: "Ministry of Digital",
        description: "Drives Malaysia's digital transformation agenda. It focuses on developing digital infrastructure, fostering innovation, enhancing cybersecurity, and promoting digital literacy across the nation."
    },
    {
        link: "https://www.kpdn.gov.my/en/",
        title: "Ministry of Domestic Trade and Cost of Living (KPDN)",
        description: "Regulates domestic trade, protects consumer rights, and manages the cost of living. It ensures fair trade practices, monitors prices, and promotes a conducive business environment."
    },
    {
        link: "https://ekonomi.gov.my/en",
        title: "Ministry of Economy",
        description: "Plans and manages Malaysia's economic development. It formulates economic policies, strategies, and implements programs to achieve sustainable growth, increase productivity, and enhance the nation's competitiveness."
    },
    {
        link: "https://www.moe.gov.my/",
        title: "Ministry of Education (KPM)",
        description: "Oversees the national education system from primary to secondary level. It develops curriculum, manages schools, and implements policies to improve the quality of education for all Malaysians."
    },
    {
        link: "https://www.petra.gov.my/",
        title: "Ministry of Energy Transition and Water Transformation (PETRA)",
        description: "Focuses on sustainable energy development and water resource management. It promotes renewable energy, ensures water security, and drives the transition to a greener economy."
    },
    {
        link: "https://www.kuskop.gov.my/",
        title: "Ministry of Entrepreneurship and Cooperatives Development (KUSKOP)",
        description: "Promotes entrepreneurship and the growth of cooperatives. It provides support services, access to funding, and training programs for entrepreneurs and cooperative societies."
    },
    {
        link: "https://www.mof.gov.my/portal/en",
        title: "Ministry of Finance (MOF)",
        description: "Manages the nation's finances and fiscal policies. It prepares the national budget, oversees revenue collection, and regulates financial institutions to ensure economic stability and growth."
    },
    {
        link: "https://www.kln.gov.my/",
        title: "Ministry of Foreign Affairs (Wisma Putra)",
        description: "Handles Malaysia's international relations and diplomacy. It represents the country abroad, promotes bilateral and multilateral ties, and protects the interests of Malaysians overseas."
    },
    {
        link: "https://www.moh.gov.my/",
        title: "Ministry of Health (KKM)",
        description: "Responsible for the nation's public health system. It provides healthcare services, implements health policies, and ensures access to quality medical care for all citizens."
    },
    {
        link: "https://www.mohe.gov.my/en",
        title: "Ministry of Higher Education (KPT)",
        description: "Oversees the development of higher education institutions. It formulates policies, ensures quality standards, and promotes research and innovation in universities and colleges."
    },
    {
        link: "https://www.moha.gov.my/index.php/en/",
        title: "Ministry of Home Affairs (KDN)",
        description: "Maintains national security and public order. It manages law enforcement agencies, immigration, and civil registration, while ensuring peace and stability within the country."
    },
    {
      link: "https://www.kpkt.gov.my/",
      title: "Ministry of Housing and Local Government (KPKT)",
      description: "Develops policies related to housing, urban development, and local governance. It ensures adequate housing, plans sustainable cities, and empowers local authorities."
    },
    {
      link: "https://www.mohr.gov.my/index.php",
      title: "Ministry of Human Resources (KESUMA)",
      description: "Develops policies related to labor and human capital. It oversees employment, industrial relations, social security, and skills development to enhance the workforce."
    },
    {
      link: "https://www.miti.gov.my/index.php",
      title: "Ministry of Investment, Trade and Industry (MITI)",
      description: "Promotes industrial development, trade, and foreign investment. It formulates policies to enhance Malaysia's manufacturing sector and attract investments."
    },
    {
      link: "https://www.perpaduan.gov.my/index.php/bm/",
      title: "Ministry of National Unity (KPN)",
      description: "Fosters national unity and social cohesion. It promotes understanding, tolerance, and harmony among Malaysia’s diverse communities through various programs and initiatives."
    },
    {
      link: "https://www.nres.gov.my/ms-my/Pages/default.aspx",
      title: "Ministry of Natural Resources and Environmental Sustainability (NRES)",
      description: "Manages and conserves the country's natural resources and the environment.  It develops policies for sustainable resource use, biodiversity protection, and environmental preservation."
    },
    {
      link: "https://www.kpk.gov.my/kpk/en/",
      title: "Ministry of Plantation and Commodities (KPK/MPC)",
      description: "Oversees the development of the plantation and commodities sector. It promotes sustainable practices, supports industry growth, and enhances the global competitiveness of Malaysian commodities."
    },
    {
      link: "https://www.rurallink.gov.my/",
      title: "Ministry of Rural and Regional Development (KKDW)",
      description: "Develops rural areas and improves the quality of life for rural communities. It implements infrastructure projects, promotes economic activities, and provides social amenities."
    },
    {
      link: "https://www.mosti.gov.my/en/",
      title: "Ministry of Science, Technology and Innovation (MOSTI)",
      description: "Drives scientific and technological advancement. It formulates policies, promotes research and development, and fosters a culture of innovation to enhance the nation's competitiveness."
    },
    {
      link: "https://motac.gov.my/en/",
      title: "Ministry of Tourism, Arts and Culture (MOTAC)",
      description: "Promotes Malaysia as a premier tourist destination and preserves national arts and cultural heritage. It develops tourism products, supports cultural events, and conserves historical sites."
    },
    {
      link: "https://www.mot.gov.my/en",
      title: "Ministry of Transport (MOT)",
      description: "Develops and regulates the nation’s transportation infrastructure and services. It oversees land, air, and sea transport, ensuring efficient, safe, and sustainable connectivity."
    },
    {
      link: "https://www.kpwkm.gov.my/",
      title: "Ministry of Women, Family and Community Development (KPWKM)",
      description: "Develops policies and programs for the well-being of women, families, and communities. It addresses social issues, promotes gender equality, and provides support services."
    },
    {
      link: "https://www.kbs.gov.my/",
      title: "Ministry of Youth and Sports (KBS)",
      description: "Promotes youth development and sports. It implements programs to empower youth, encourages healthy lifestyles, and enhances the nation's sporting excellence."
    }
];
  
  const container = document.getElementById("goverment-container");
  function loadMinistries(){
    malaysianMinistries.forEach(ministry =>{
        const newLink = document.createElement("a");
        newLink.target = "_blank";
        newLink.href = ministry.link;

        const newBlock = document.createElement("div");
        newBlock.classList.add("goverment-block");

        const newBlockDesc = document.createElement("p");
        newBlockDesc.classList.add("goverment-desc");
        newBlockDesc.textContent = ministry.description;

        const newButton = document.createElement("div");
        newButton.classList.add("goverment-button");
        newButton.textContent = ministry.title;
        
        newBlock.appendChild(newBlockDesc);
        newLink.appendChild(newButton);
        newBlock.appendChild(newLink);
        container.appendChild(newBlock);
    });
  }

  loadMinistries();