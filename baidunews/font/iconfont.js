;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="add" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1025.024 428.8 597.248 428.8 597.248 1.024 428.8 1.024 428.8 428.8 1.024 428.8 1.024 597.248 428.8 597.248 428.8 1025.024 597.248 1025.024 597.248 597.248 1025.024 597.248Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="sousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M1015.7783 938.2318 723.5205 644.0489c118.8301-156.9516 106.7182-381.4717-36.393-524.5819-156.4109-156.4109-410.0045-156.4109-566.4154 0-156.4109 156.375-156.4109 409.9697 0 566.3805 143.06 143.06 367.404 155.2425 524.3433 36.606l292.3223 294.2136c9.6051 9.6041 25.2221 9.6041 34.8252 0l43.5763-43.5763C1025.4172 963.4519 1025.4172 947.8369 1015.7783 938.2318zM194.9153 613.8132c-114.8621-114.8611-114.8621-301.0826 0-415.9089 114.8631-114.8621 301.0458-114.8621 415.9099 0 114.8631 114.8262 114.8631 301.0478 0 415.9089C495.9611 728.6764 309.7784 728.6764 194.9153 613.8132z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="camera" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M907.2128 289.5872l-179.2 0-51.2-104.2176 0 1.8176-307.2 0-51.2 102.4-179.2 0c-25.6 0-76.8 49.3824-76.8 99.7632l0 410.3936c0 42.3936 43.7504 104.2176 76.8 104.2176l768 0c33.5872 0 76.8-63.4368 76.8-103.424L984.0128 390.1696C984.0128 364.5696 958.4128 289.5872 907.2128 289.5872zM932.8128 800.5632c0 10.112-17.9712 51.6608-25.6 52.224l-768 0c-5.9136-0.4864-25.6-39.4496-25.6-53.0176L113.6128 389.376c0-16.2304 47.4112-48.1792 51.2-48.5632l153.6 0 18.7392-1.8176 14.9248-24.8832 43.136-75.6992 256 0 44.0064 75.7248 14.08 24.8576 44.3136 1.8176 153.6 0c18.048 0 25.344 47.36 25.6 49.3824L932.8128 800.5632zM523.2128 390.1696c-98.944 0-179.2 80.2304-179.2 179.2s80.256 179.2 179.2 179.2c98.9696 0 179.2-80.2304 179.2-179.2S622.1824 390.1696 523.2128 390.1696zM523.2128 697.3696c-70.5792 0-128-57.4208-128-128s57.4208-128 128-128 128 57.4208 128 128S593.7664 697.3696 523.2128 697.3696z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="101" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M690.228 569.503c80.938-56.495 134.005-150.169 134.005-256.361 0-172.646-139.958-312.606-312.604-312.606s-312.602 139.96-312.602 312.606c0 106.065 52.947 199.632 133.722 256.149C150.589 640.684 21.39 817.606 21.39 1025.078c0 0.02 0.002 0.06 0.002 0.06l87.766 0c0-0.243-0.036-0.477-0.036-0.719 0-205.731 154.886-374.877 354.354-398.206 2.117-0.19 56.069-4.944 100.343 0.757 1.151 0.153 2.303 0.306 3.451 0.468 0.171 0.024 0.341 0.05 0.512 0.075 194.538 27.795 344.181 194.685 344.181 396.906 0 0.242-0.036 0.476-0.036 0.719l89.079-0.02c0 0 0.002-0.02 0.002-0.04C1001.009 817.822 872.086 641.042 690.228 569.503zM511.72 547.407c-129.337 0-234.18-104.844-234.18-234.178 0-129.332 104.844-234.176 234.18-234.176 129.33 0 234.176 104.844 234.176 234.176C745.896 442.563 641.05 547.407 511.72 547.407z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="config" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M977.011826 425.716868l-2.12643-13.954827-98.520851-25.901926c-4.247744-1.735527-30.27656-13.135158-38.412868-34.114982-4.835122-12.465916-2.836605-26.780947 6.109138-43.748387l50.01409-83.445504-9.105379-11.627828c-26.136264-33.375132-56.730049-62.968124-90.933035-87.959308l-12.71151-9.28855-73.040527 53.648874c-3.378957 1.88186-19.635199 10.395768-37.182854 10.396791-12.45159 0-30.495548-3.560082-43.671639-34.261315L589.356832 41.370223l-13.193487-1.500167c-17.253966-1.961678-34.855856-2.956332-52.313459-2.956332-21.399379 0-42.986023 1.50426-64.160275 4.470825l-14.669094 2.055822-23.644513 103.497189c-0.925069 2.535753-4.79112 12.411681-12.018731 22.040992-10.32516 13.756305-22.079878 20.444635-35.933397 20.446681-8.615215 0.001023-18.307971-2.588965-28.820396-7.699356l-95.9237-53.336766-11.264555 9.026584c-30.03506 24.066115-56.978712 51.836599-80.081896 82.540901l-9.290597 12.347213 57.656141 83.959204c2.249227 4.358261 14.46955 29.684066 6.728238 51.096748-4.52199 12.508895-15.363919 21.982664-33.137725 28.951379L69.493747 432.561763l-1.466398 13.785981c-1.723248 16.188704-2.596128 32.670074-2.596128 48.984644 0 25.362644 2.091638 50.816363 6.217608 75.653027l2.328022 14.018272 106.054431 25.698289c4.275373 1.650593 30.525224 12.545734 39.066761 33.365922 5.074575 12.368702 3.354398 26.718525-5.259794 43.853787l-51.462069 89.754187 9.599635 11.484565c25.116027 30.04734 53.992705 56.80475 85.826737 79.526241l10.671037 7.616468 85.839017-44.217061c2.959402-1.082658 14.990413-5.14416 28.758997-5.14416 25.140587 0 40.191374 13.163811 47.332005 41.422412l15.429411 79.027891 15.228843 2.085498c20.695345 2.835581 41.820478 4.273327 62.788022 4.273327 20.004613 0 40.179095-1.309832 59.963697-3.895727l13.500479-1.76418 33.679054-104.641245c2.408863-5.154393 19.064194-38.356586 47.861054-38.356586 9.550517 0 20.191878 3.473101 31.639604 10.323113l79.358419 53.624315 12.279674-9.392928c32.398898-24.785499 61.388139-53.788044 86.160335-86.204337l9.190313-12.024871-58.104349-89.727581c-2.127454-4.412496-13.663184-30.064736-5.342682-51.262524 4.858658-12.382005 15.953344-21.556968 33.909297-28.042683l110.106724-33.07428 1.531889-14.171768c1.781576-16.479323 2.685155-33.236985 2.685155-49.808406C982.267527 472.021473 980.499254 448.599018 977.011826 425.716868zM938.1354 526.426571l-83.087347 24.959461-1.025353 0.335644c-30.390147 10.81737-50.625004 28.777417-60.140729 53.378721-16.124236 41.683355 6.877641 85.564771 7.865131 87.412862l0.424672 0.796132 42.624796 65.822125c-17.047258 20.715811-36.056194 39.750329-56.748469 56.821123l-53.955866-36.4604-0.908696-0.580215c-18.422581-11.145851-36.7019-16.796548-54.331419-16.796548-59.81941 0-86.671988 62.682621-87.786369 65.351404l-0.347924 0.832971-25.900903 80.470753c-27.476795 2.688225-55.304583 2.65855-82.751702-0.078795l-9.590426-49.117674-0.233314-1.051959c-6.624884-26.727735-19.293415-46.732347-37.652552-59.458183-14.455223-10.019191-31.789007-15.099906-51.519374-15.099906-24.184819 0-43.624567 7.739265-45.76123 8.621355l-0.835018 0.344854-64.169485 33.054837c-20.809955-15.857153-40.110533-33.662681-57.611116-53.147454l36.707017-64.020082 0.511653-0.949628c14.623046-28.754904 16.959254-55.707766 6.948249-80.112596-16.96437-41.349757-63.841004-57.384965-65.828264-58.048067l-0.856507-0.284479-80.201623-19.434631c-2.366907-18.051121-3.563152-36.377512-3.563152-54.656831 0-10.217712 0.3776-20.507056 1.125637-30.729885l83.757612-27.652803 1.01512-0.363274c30.086226-11.637038 49.826825-30.138414 58.673307-54.988382 14.988366-42.104957-9.19236-85.346807-10.229992-87.167269l-0.447185-0.785899-41.167608-59.948347c15.722076-19.363 33.177634-37.309744 52.122101-53.586452l70.955028 39.45357 0.954745 0.500397c16.645099 8.190543 32.881898 12.342096 48.26219 12.341073 27.51875-0.004093 51.829436-13.014408 70.301136-37.625946 12.710486-16.934694 18.225083-33.561373 18.811438-35.401278l0.275269-0.862647 17.442254-76.349899c25.88146-2.697435 52.066843-2.982938 77.937047-0.86981l29.064966 79.462796 0.394996 1.00284c9.032724 21.314445 21.621437 37.349653 37.417191 47.659463 13.501502 8.812713 28.988218 13.280468 46.029336 13.279445 31.450293-0.002047 57.326637-15.289218 60.173474-17.032932l0.771573-0.471744 49.093115-36.059264c22.182208 17.521049 42.530652 37.250392 60.739363 58.894342l-34.975583 58.355059-0.531096 0.938372c-15.174608 28.466332-18.033725 55.369052-8.495488 79.963193 16.160051 41.670052 62.718437 58.608839 64.692395 59.309804l0.851391 0.301875 72.975035 19.185968c1.919722 16.286941 2.889817 32.796964 2.889817 49.249681C939.288666 505.662665 938.901857 516.073782 938.1354 526.426571z"  ></path>'+
      ''+
      '<path d="M523.849886 276.522917c-58.446134 0-113.394606 22.760376-154.721851 64.087621-41.328267 41.327244-64.087621 96.275717-64.087621 154.721851 0 120.652917 98.157577 218.810494 218.810494 218.810494s218.809471-98.157577 218.809471-218.810494c0-58.446134-22.760376-113.394606-64.087621-154.721851C637.243469 299.283294 582.296019 276.522917 523.849886 276.522917zM523.849886 671.164023c-96.954169 0-175.831634-78.877465-175.831634-175.831634 0-96.953146 78.877465-175.830611 175.831634-175.830611 96.953146 0 175.830611 78.877465 175.830611 175.830611C699.680497 592.286558 620.803032 671.164023 523.849886 671.164023z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="baidu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M184.256 539.584C295.68 515.648 280.448 382.592 277.12 353.472 271.68 308.672 218.944 230.336 147.328 236.48c-90.112 8.064-103.296 138.24-103.296 138.24C31.872 434.88 73.216 563.456 184.256 539.584zM302.528 771.008c-3.264 9.344-10.56 33.28-4.224 54.144 12.416 46.656 53.056 48.768 53.056 48.768L409.6 873.92l0-142.528L347.136 731.392C319.04 739.776 305.472 761.536 302.528 771.008zM390.912 316.416c61.504 0 111.168-70.72 111.168-158.272C502.144 70.72 452.416 0 390.912 0 329.536 0 279.68 70.72 279.68 158.144 279.68 245.632 329.536 316.416 390.912 316.416zM655.744 326.848c82.176 10.688 134.976-77.056 145.472-143.488 10.752-66.368-42.24-143.552-100.416-156.8-58.368-13.376-131.136 80-137.728 140.928C555.136 241.984 573.76 316.352 655.744 326.848zM857.152 717.632c0 0-127.168-98.304-201.344-204.672C555.136 356.16 412.16 419.968 364.352 499.712 316.736 579.456 242.56 629.824 232 643.2c-10.688 13.184-153.6 90.304-121.856 231.168s143.168 138.112 143.168 138.112 82.112 8.192 177.344-13.184c95.296-21.12 177.344 5.312 177.344 5.312s222.592 74.56 283.52-68.992C952.384 792.064 857.152 717.632 857.152 717.632zM476.224 931.264 331.584 931.264c-62.528-12.48-87.36-55.168-90.56-62.4-3.072-7.36-20.864-41.664-11.392-99.968 26.944-87.424 104-93.696 104-93.696l77.056 0L410.688 580.48l65.536 1.088L476.224 931.264zM745.792 930.24 579.264 930.24c-64.512-16.64-67.52-62.592-67.52-62.592l0-184.128 67.52-1.088 0 165.568c4.096 17.536 26.048 20.8 26.048 20.8l68.544 0 0-185.344 71.936 0L745.792 930.24zM981.568 438.528c0-31.808-26.432-127.552-124.416-127.552-98.112 0-111.232 90.368-111.232 154.304 0 60.992 5.12 146.176 127.04 143.424C994.88 605.952 981.568 470.528 981.568 438.528z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="volume" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M213.333333 341.333333l213.333333-213.333333 0 768-213.333333-213.333333-85.333333 0q-52.992 0-90.496-37.504t-37.504-90.496l0-83.669333q0-52.992 37.504-91.349333t90.496-38.314667l85.333333 0zM341.333333 690.005333l0-357.674667-92.672 94.336-120.661333 0q-17.322667 0-29.994667 13.184t-12.672 31.146667l0 83.669333q0 17.664 12.501333 30.165333t30.165333 12.501333l120.661333 0zM619.989333 369.664q12.330667 0 23.168 6.997333t16.170667 18.986667q23.338667 56.32 23.338667 116.352 0 61.013333-23.338667 115.669333-4.992 11.989333-15.829333 19.157333t-23.509333 7.168q-15.658667 0-29.184-11.818667t-13.482667-30.848q0-7.68 3.328-16.682667 16.682667-39.338667 16.682667-82.688 0-43.008-16.682667-82.986667-3.328-7.68-3.328-16.682667 0-18.986667 12.842667-30.848t29.824-11.818667zM750.336 250.666667q24.021333 0 36.650667 20.992 32.981333 54.997333 48.981333 113.664 17.322667 62.677333 17.322667 126.677333 0 63.658667-17.322667 127.018667-16.341333 59.349333-48.981333 113.664-12.330667 20.650667-36.650667 20.650667-16.682667 0-29.653333-11.989333t-13.013333-30.677333q0-11.648 6.314667-22.016 25.984-43.349333 39.68-92.672 14.336-50.005333 14.336-104.021333 0-53.674667-14.336-103.68-13.653333-49.322667-39.68-93.013333-6.314667-9.685333-6.314667-21.674667 0-18.005333 13.184-30.506667t29.482667-12.501333zM877.994667 133.674667q22.997333 0 35.328 18.688 54.314667 79.658667 82.517333 171.349333t28.16 188.330667-28.16 188.330667-82.517333 171.349333q-11.989333 18.688-35.328 18.688-17.322667 0-29.824-11.989333t-12.501333-30.677333q0-13.312 7.338667-24.021333 95.658667-140.330667 95.658667-311.68 0-84.010667-24.32-163.328t-71.338667-148.352q-7.338667-10.666667-7.338667-24.021333 0-18.688 12.501333-30.677333t29.824-11.989333z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="suijibofang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M0.021997 193.32096l0 127.930671c140.79363 5.760191 220.534765 31.102369 269.941012 67.964928 15.807011-41.086767 34.494629-79.037101 59.709917-112.955608C261.642506 229.671866 160.270724 199.528336 0.021997 193.32096zM1023.979018 191.977359l-255.989255 1.728364c-255.989255-1.728364-356.145349 147.769508-408.175353 295.795866-37.82242 107.579157-70.973448 201.399963-359.793436 213.110679l0 127.995139c344.04987-13.43908 416.239006-137.082098 472.171899-296.179606 34.814923-99.003851 109.819175-207.479425 295.795866-208.695113l0 122.234949L1023.979018 191.977359zM767.989763 575.960731l0 122.234949c-97.979522-1.280156-164.600849-32.638351-205.943442-63.421448l0.511653 0.76748c-15.743566 40.957831-34.174334 78.780251-59.582003 112.635313 61.757552 41.98216 169.017438 82.428338 265.012769 83.196841l255.989255 0.576121L767.989763 575.960731z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="bofangqishangyiqu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M947.885462 93.813642c-7.382131-4.237511-15.727193-4.237511-23.137976-0.042979L231.153614 491.626997c-7.366781 4.237511-11.606339 11.45796-11.606339 19.978007 0 8.478092 4.239558 15.697517 11.606339 19.964704l693.594895 397.813355c7.40976 4.222161 15.755846 4.222161 23.137976 0 7.364735-4.269233 11.559267-11.518335 11.559267-19.937075L959.445752 113.74867C959.444728 105.257276 955.25122 98.080829 947.885462 93.813642z"  ></path>'+
      ''+
      '<path d="M63.978127 90.630137l113.491821 0 0 841.920058-113.491821 0 0-841.920058Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="bofangqixiayiqu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M792.183284 491.574808 98.655927 93.800339c-7.40976-4.222161-15.753799-4.222161-23.134907 0-7.364735 4.26821-11.558244 11.517311-11.558244 19.935028l0 795.621593c0 8.490372 4.193509 15.665795 11.558244 19.932981 7.381108 4.236488 15.72617 4.236488 23.134907 0.042979l693.527356-397.818471c7.366781-4.236488 11.605316-11.456936 11.605316-19.97596C803.788599 503.060397 799.550065 495.841995 792.183284 491.574808z"  ></path>'+
      ''+
      '<path d="M845.861834 90.633207l113.480564 0 0 841.838194-113.480564 0 0-841.838194Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="arrow" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M898.304 342.336 898.304 342.336l-306.624 311.232c-46.592 51.136-116.928 46.656-162.688-3.776l-304.256-308.48c-13.248-14.528-52.928-0.064-66.368 14.72-13.376 14.72-26.368 49.472-13.12 64l383.744 389.056c45.76 50.368 116.096 54.848 162.688 3.776l386.624-392.448c13.504-14.784 0.064-50.304-13.184-64.832S911.744 327.552 898.304 342.336z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="cc-mic" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.221776 675.709549c-91.010807 0-164.984588-74.021877-164.984588-164.984588L346.237187 227.894384c0-90.986247 73.973782-164.984588 164.984588-164.984588 90.959641 0 164.982542 73.998341 164.982542 164.984588L676.204317 510.72496C676.204317 601.687672 602.181417 675.709549 511.221776 675.709549zM511.221776 110.047372c-64.956408 0-117.847012 52.892651-117.847012 117.847012L393.374764 510.72496c0 64.951291 52.890604 117.844965 117.847012 117.844965 64.954361 0 117.845988-52.893674 117.845988-117.844965L629.067764 227.894384C629.067764 162.940023 576.176137 110.047372 511.221776 110.047372z"  ></path>'+
      ''+
      '<path d="M817.620118 510.72496c0-13.006222-10.590196-23.570835-23.567765-23.570835-12.982686 0-23.569812 10.564613-23.569812 23.570835 0 142.980435-116.28033 259.259742-259.259742 259.259742-142.980435 0-259.261789-116.28033-259.261789-259.259742 0-13.006222-10.5421-23.570835-23.568788-23.570835-13.028735 0-23.568788 10.564613-23.568788 23.570835 0 161.02337 124.889405 293.415656 282.829554 305.47839l0 95.196129-70.707388 0c-13.028735 0-23.569812 10.588149-23.569812 23.570835 0 12.979616 10.540054 23.567765 23.569812 23.567765l188.553377 0c12.979616 0 23.569812-10.589173 23.569812-23.567765 0-12.983709-10.591219-23.570835-23.569812-23.570835l-70.708412 0 0-95.196129C692.775738 804.140617 817.620118 671.748331 817.620118 510.72496z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="bofangqikaishi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M32.131929 56.557555C32.131929 103.800537 32.131929 933.467705 32.131929 966.035207 32.131929 1008.319351 75.890321 1039.814672 119.112624 1015.087494 153.757477 995.252143 903.011059 595.395589 962.115045 561.219815 1000.9146 538.771023 1000.244487 485.161966 962.115045 462.713173 919.562856 437.583928 167.695831 35.717034 117.303318 7.840325 80.447091-12.66514 32.131929 9.917676 32.131929 56.557555Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="huidaodingbu" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M135.68 700.63104 296.96 700.63104 296.96 1024 727.04 1024 727.04 700.63104 888.32 700.63104 512 269.47584Z"  ></path>'+
      ''+
      '<path d="M81.92 0l860.16 0 0 107.78624-860.16 0 0-107.78624Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="weather-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M81.604923 535.670154c-8.192 0-16.108308-4.253538-20.48-11.815385-6.537846-11.303385-2.638769-25.757538 8.664615-32.256l91.017846-52.499692c4.686769-2.717538 9.885538-3.268923 14.887385-2.599385-9.255385-20.086154-14.729846-41.629538-16.777846-63.842462C154.860308 375.886769 149.976615 378.092308 144.384 378.092308L39.384615 378.092308C26.308923 378.092308 15.753846 367.537231 15.753846 354.461538S26.308923 330.830769 39.384615 330.830769l104.999385 0c5.750154 0 10.870154 2.323692 14.966154 5.750154 2.087385-22.843077 7.561846-44.544 16.817231-64.433231C174.907077 272.344615 173.804308 273.092923 172.504615 273.092923c-4.017231 0-8.073846-1.024-11.815385-3.190154L69.750154 217.403077C58.446769 210.865231 54.587077 196.411077 61.124923 185.107692c6.537846-11.303385 20.992-15.163077 32.295385-8.625231l90.978462 52.539077c4.804923 2.756923 7.916308 7.089231 9.806769 11.894154 12.918154-18.156308 28.750769-34.028308 46.946462-46.907077C236.228923 192.118154 231.778462 189.243077 228.942769 184.359385L176.482462 93.420308c-6.537846-11.303385-2.638769-25.757538 8.664615-32.256 11.264-6.616615 25.757538-2.678154 32.256 8.664615l52.460308 90.939077c2.796308 4.844308 3.308308 10.161231 2.56 15.281231 19.810462-9.137231 41.432615-14.572308 64.118154-16.659692C333.115077 155.254154 330.830769 150.173538 330.830769 144.384L330.830769 39.384615c0-13.075692 10.594462-23.630769 23.630769-23.630769S378.092308 26.308923 378.092308 39.384615l0 104.999385c0 5.513846-2.205538 10.358154-5.356308 14.375385 22.291692 2.087385 43.795692 7.876923 63.724308 17.092923-0.748308-5.041231-0.196923-10.358154 2.56-15.123692l52.499692-90.939077c6.537846-11.342769 21.070769-15.202462 32.256-8.664615 11.303385 6.537846 15.163077 20.992 8.664615 32.256l-52.499692 90.939077c-2.796308 4.883692-7.286154 7.758769-12.169846 9.649231 18.038154 12.721231 33.988923 28.396308 47.064615 46.788923 1.890462-4.726154 5.001846-9.019077 9.767385-11.776l90.939077-52.539077c11.224615-6.577231 25.718154-2.638769 32.256 8.625231 6.537846 11.303385 2.638769 25.757538-8.664615 32.295385L548.233846 269.942154c-3.741538 2.166154-7.798154 3.190154-11.815385 3.190154-7.325538 0-14.139077-3.859692-18.707692-10.043077l-60.140308 33.792C436.617846 259.505231 397.115077 236.307692 354.461538 236.307692 289.319385 236.307692 236.307692 289.319385 236.307692 354.461538c0 23.906462 7.128615 46.946462 20.558769 66.56l-61.282462 42.023385c-1.024 6.852923-4.726154 13.193846-11.185231 16.935385l-91.017846 52.499692C89.678769 534.646154 85.582769 535.670154 81.604923 535.670154zM1024 669.538462c0 108.583385-88.339692 196.923077-196.923077 196.923077L236.307692 866.461538c-86.882462 0-157.538462-70.656-157.538462-157.538462 0-88.182154 73.728-159.665231 161.476923-157.499077C258.520615 461.627077 338.116923 393.846154 433.230769 393.846154c10.279385 0 20.519385 0.866462 30.838154 2.638769C505.422769 323.032615 584.113231 275.692308 669.538462 275.692308c122.564923 0 223.665231 93.814154 235.204923 213.385846C976.226462 519.68 1024 590.099692 1024 669.538462zM945.230769 669.538462c0-53.720615-36.627692-100.627692-89.048615-114.018462l-30.326154-7.719385 1.339077-38.675692C827.076923 425.117538 756.420923 354.461538 669.538462 354.461538c-64.827077 0-123.904 41.117538-146.904615 102.281846l-13.627077 36.194462-36.470154-12.996923C458.633846 475.017846 445.755077 472.615385 433.230769 472.615385c-65.142154 0-118.153846 53.011692-118.153846 118.153846l0.708923 5.080615 3.623385 59.707077-56.241231-20.243692C253.518769 631.847385 244.736 630.153846 236.307692 630.153846c-43.441231 0-78.769231 35.328-78.769231 78.769231s35.328 78.769231 78.769231 78.769231l590.769231 0C892.219077 787.692308 945.230769 734.680615 945.230769 669.538462z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="tianqi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M864 544l0-64 128 0 0 64L864 544zM738.272 240.48l90.496-90.528L874.016 195.2l-90.496 90.528L738.272 240.48zM512 768c-141.376 0-256-114.624-256-256 0-141.376 114.624-256 256-256 141.376 0 256 114.624 256 256C768 653.376 653.344 768 512 768zM512 319.584c-106.272 0-192.416 86.144-192.416 192.416 0 106.272 86.144 192.416 192.416 192.416 106.272 0 192.416-86.144 192.416-192.416C704.416 405.728 618.272 319.584 512 319.584zM480 32l64 0 0 128-64 0L480 32zM149.952 195.2 195.2 149.952l90.496 90.528L240.448 285.728 149.952 195.2zM160 544 32 544l0-64 128 0L160 544zM285.696 783.52 195.2 874.016l-45.248-45.248 90.496-90.528L285.696 783.52zM544 992l-64 0 0-128 64 0L544 992zM874.016 828.768l-45.248 45.248-90.496-90.528 45.248-45.248L874.016 828.768z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="qiehuanbofangqi" viewBox="0 0 1157 1024">'+
      ''+
      '<path d="M66.064516 0l1024 0c36.335484 0 66.064516 29.729032 66.064516 66.064516l0 165.16129c0 36.335484-29.729032 66.064516-66.064516 66.064516l-1024 0c-36.335484 0-66.064516-29.729032-66.064516-66.064516l0-165.16129C0 29.729032 29.729032 0 66.064516 0z"  ></path>'+
      ''+
      '<path d="M49.548387 561.548387l1057.032258 0c26.425806 0 49.548387 23.122581 49.548387 49.548387l0 0c0 26.425806-23.122581 49.548387-49.548387 49.548387l-1057.032258 0c-26.425806 0-49.548387-23.122581-49.548387-49.548387l0 0C0 584.670968 23.122581 561.548387 49.548387 561.548387z"  ></path>'+
      ''+
      '<path d="M49.548387 924.903226l1057.032258 0c26.425806 0 49.548387 23.122581 49.548387 49.548387l0 0c0 26.425806-23.122581 49.548387-49.548387 49.548387l-1057.032258 0c-26.425806 0-49.548387-23.122581-49.548387-49.548387l0 0C0 948.025806 23.122581 924.903226 49.548387 924.903226z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="arrow2" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M567.229 216.817c136.556 130.263 273.111 260.521 409.529 390.779 56.289 53.637-35.103 133.596-91.525 79.714-121.544-115.927-242.959-231.849-364.503-347.709-125.701 116.48-251.536 232.96-377.237 349.501-57.221 53.018-148.613-26.941-91.453-79.774 141.174-130.877 282.419-261.688 423.665-392.509 23.45-21.627 68.347-22.185 91.525 0v0 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
