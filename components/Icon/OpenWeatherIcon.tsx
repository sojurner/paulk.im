import React from 'react';
import { µIcon } from './types';

export const OpenWeatherIcon: React.FC<µIcon.Props> = ({
  isActive,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      version="1.1"
      viewBox="0 0 400 400"
      {...props}
    >
      <g fillRule="evenodd" stroke="none">
        <path
          fill={isActive ? '#e96f4d' : 'var(--chakra-colors-gray-400)'}
          d="M192.586 81.623c-.144.233-.74.319-1.324.191-.584-.128-3.132.13-5.662.572-2.53.443-5.639.808-6.909.81-2.065.004-2.356.108-2.758.992-.499 1.094.18 2.408 1.067 2.067.26-.099.726-.02 1.036.176.413.261.276.358-.508.363-.805.004-1.104.23-1.2.906-.2 1.41-2.06 1.431-3.351.038-1.351-1.459-3.737-1.677-5.696-.521-.812.48-2.534.931-4.188 1.099-3.244.328-4.008.975-3.118 2.638.296.553.916 1.059 1.378 1.126 1.178.169 1.309 1.383.187 1.739-.556.176-.963.113-1.056-.166-.083-.249-.766-.453-1.517-.453-1.191 0-1.367-.128-1.367-1 0-1.328-2.022-1.367-5.284-.102-2.736 1.061-3.052 1.997-.912 2.703 2.465.814 1.089 1.226-3.861 1.157-5.689-.08-6.376.244-4.385 2.063.997.91 1.268 1.431 1.09 2.095-.13.486-.24 1.019-.243 1.184-.013.753-1.965.221-2.568-.7-1.229-1.875-3.86-.555-9.678 4.856-.742.69-1.797 1.367-2.343 1.504s-1.161.562-1.368.945c-1.001 1.858-3.641 4.095-4.832 4.095-1.081 0-1.216.131-1.216 1.186 0 .911-.33 1.409-1.426 2.154-1.44.978-4.636 4.482-5.412 5.931-.309.577-.754.75-1.691.656-1.266-.126-1.271-.119-1.39 1.916-.099 1.694-.286 2.132-1.1 2.567-.54.289-.981.713-.981.943 0 .229-.464.787-1.032 1.24-.567.452-1.156 1.432-1.308 2.176-.153.745-.588 1.507-.969 1.693-.38.186-1.006.49-1.391.675-.385.185-1.06 1.062-1.5 1.948-.44.886-1.108 1.91-1.485 2.276-1.386 1.348-1.619 3.486-.507 4.648 1.228 1.281 1.227 1.319-.053 2.599-1.056 1.057-1.148 3.384-.146 3.725.215.074.391.417.391.762 0 .538-.118.523-.809-.104-.981-.887-1.555-.461-1.944 1.442-.27 1.321-1.247 2.136-1.247 1.04 0-.411-.429-.593-1.4-.593-1.093 0-1.4.161-1.4.736 0 .405-.183.85-.407.988-.223.138-.31.406-.193.596.117.19.021.464-.215.609-.49.303-2.385 4.433-2.385 5.198 0 .279-.277.614-.615.743-.481.185-.599.839-.544 3.016.056 2.207-.106 3.078-.785 4.23-.471.797-1.069 2.294-1.329 3.327-.26 1.032-.785 2.417-1.167 3.077-.674 1.165-1.015 3.316-1.349 8.509-.089 1.38-.404 3-.701 3.6-.847 1.711-.62 26.331.258 28.03.71 1.373.848 4.28.221 4.668a.729.729 0 00-.3.733c.061.264-.121.746-.403 1.07-.282.325-.755.94-1.051 1.368-.523.756-.569.757-1.646.052-2.33-1.527-9.449-.19-10.709 2.011-.176.308-.656.559-1.067.559-1.716 0-2.013.405-2.011 2.743.002 1.241.272 2.752.6 3.357 3.828 7.046 2.618 6.69 23.24 6.844 8.997.067 17.437-.038 18.756-.235 2.678-.4 8.688.222 9.807 1.015 1.033.732 4.549 5.139 5.102 6.395 1.122 2.546.24 10.963-1.266 12.091-.301.225-.614.75-.694 1.166-.405 2.088-6.459 3.895-10.147 3.029-1.342-.315-1.697-.26-2.2.339-.33.393-1.119.747-1.753.785-5.682.348-8.206 8.814-3.931 13.185 2.055 2.1 1.188 2.047 37.084 2.249 34.957.196 35.53.225 37.921 1.925 1.094.778 1.143.779 1.959.055.829-.737.835-.733.624.408-.145.784.124 1.802.842 3.19 2.163 4.182.512 14.379-2.57 15.87-.936.454-2.151 1.273-2.698 1.82-.636.636-1.406.977-2.136.945-.628-.027-11.897-.128-25.042-.225l-23.9-.175v2.375l23.7-.076c23.458-.074 23.7-.067 23.7.725 0 .946-30.842 1.503-31.42.567-.236-.381-6.3-.506-18.431-.378l-1.052.011.006 4.422c.008 5.844 1.302 7.857 5.297 8.24.66.063 2.57.328 4.244.589 2.326.363 4.001.366 7.114.012 2.948-.335 25.894-.463 83.214-.463 71.649 0 79.165-.06 79.384-.63.211-.549.377-.524 1.297.2 1.239.974 2.16 1.038 3.887.267.693-.309 2.068-.804 3.057-1.1 1.251-.374 1.836-.78 1.927-1.337.072-.44.592-1.766 1.155-2.946l1.025-2.147-.752-2.404c-.607-1.939-.965-2.479-1.852-2.793-.605-.213-1.1-.53-1.1-.704 0-1.191-5.993-2.379-6.842-1.356-.402.485-.335.631.376.817.986.258 1.117.745.326 1.213-.296.176-.794.86-1.105 1.52-.674 1.431-1.213 1.523-1.75.3l-.395-.9h-31.462c-32.46 0-32.184.013-31.656-1.5.138-.394 6.878-.5 31.895-.5 31.378 0 31.722-.009 31.929-.8.32-1.225 1.539-1.181-33.101-1.209-33.185-.028-34.929.044-33.256 1.362.969.763.096 2.247-1.323 2.247-1.4 0-1.904-.596-1.21-1.431.944-1.138.775-3.011-.368-4.07-3.095-2.87-3.613-3.504-3.95-4.841-.202-.802-.295-2.412-.207-3.579.094-1.232-.028-2.35-.29-2.666-.601-.724.448-4.396 1.767-6.183 2.827-3.832 5.2-4.507 15.284-4.35 4.215.066 7.579-.015 7.477-.18-.103-.165.101-.3.451-.3 1.038 0 2.61-1.233 2.61-2.046 0-.466.282-.754.738-.754 1.656 0 3.519-4.892 2.81-7.377-.66-2.31-5.254-6.147-5.971-4.986-.227.368-.464.393-.847.086-.708-.567-5.8-1.418-6.727-1.124-.405.129-.851.046-.993-.183-.141-.229-.614-.416-1.05-.416-.913 0-3.96-1.471-3.96-1.912 0-.163-.472-.805-1.049-1.428-1.321-1.425-1.648-12.838-.388-13.543.35-.196.638-.663.638-1.037.004-1.376 1.507-3.102 3.633-4.172l2.166-1.089 52.38-.015c28.809-.009 52.479-.158 52.6-.333.121-.175 1.217-.552 2.436-.838 3.771-.886 4.472-1.891 4.426-6.348-.034-3.354-.465-4.024-1.956-3.047-1.138.745-2.325.419-2.624-.721-.331-1.269.049-1.585 1.762-1.461 1.993.144 2.416-.317 1.17-1.274-1.274-.979-2.041-.975-3.303.018-.56.44-1.259.794-1.554.787-.383-.009-.345-.158.133-.522.622-.473.615-.544-.089-.984-.44-.275-.661-.727-.527-1.077.202-.527-.87-.604-8.411-.604-8.188 0-8.643.039-8.643.751 0 1.846-2.994 2.23-3.855.495-1.335-2.692-5.345-1.63-5.345 1.416 0 .845-.179.938-1.8.938-1.969 0-2.538-1.205-1.2-2.543 1.184-1.183.574-2.347-1.502-2.868-1.212-.304-1.612-2.715-.616-3.711.265-.265.44-1.097.389-1.85-.051-.752.093-1.482.318-1.622.692-.427.457-2.16-.411-3.028-.841-.841-.936-17.738-.159-28.344.206-2.825.144-3.423-.386-3.72-.411-.229-.633-.909-.633-1.934 0-1.313-.135-1.58-.8-1.58-.444 0-.8-.267-.8-.6 0-.33.154-.6.343-.6.456 0-2.404-11.287-2.99-11.8-.251-.22-.583-.939-.737-1.598-.349-1.493-2.984-7.02-3.68-7.72-.752-.756-1.442-3.652-1.181-4.956.133-.665.052-1.126-.196-1.126-.61 0-3.559-3.071-3.559-3.706 0-.295-.428-1.427-.951-2.515-.523-1.089-1.058-2.296-1.189-2.682-.131-.387-.738-.915-1.349-1.173-1.305-.552-4.511-3.846-4.511-4.636 0-.3-.27-.815-.6-1.145-.33-.33-.6-1.008-.6-1.507 0-.58-.721-1.562-2-2.722-1.142-1.036-2-2.161-2-2.623 0-.444-.604-1.322-1.343-1.95-3.204-2.723-3.084-2.661-4.113-2.111-.856.458-1.082.391-2.211-.66-.691-.643-1.104-.9-.918-.57.292.517.245.524-.338.051-.372-.302-.677-.72-.677-.929 0-.208-.27-.649-.6-.979-.848-.848-.744-2.012.2-2.259 1.078-.282 1.011-1.023-.13-1.457-.512-.195-1.254-.865-1.65-1.491-.981-1.548-2.244-2.516-3.297-2.527-.483-.005-1.113-.335-1.4-.732-.856-1.184-4.935-4.077-5.759-4.083-1.552-.013-6.361-2.988-6.411-3.967-.061-1.168-.781-1.613-2.622-1.621-1.094-.004-1.776-.312-2.669-1.206-.713-.712-1.619-1.2-2.231-1.2-.833 0-1.031-.192-1.031-1 0-1.058-.668-1.212-4.356-1.005-1.179.066-1.328-.029-1.145-.732.348-1.33-1.173-2.343-3.994-2.66-1.373-.154-2.903-.592-3.4-.974-.498-.381-1.237-.814-1.643-.963-.406-.148-.837-.65-.959-1.115-.209-.8-.386-.83-3.39-.568-3.245.284-6.505-.416-7.842-1.682-.29-.276-1.01-.503-1.6-.506-.589-.003-1.483-.116-1.987-.251-.761-.204-.997-.028-1.4 1.041-.449 1.193-.586 1.268-1.884 1.04-.77-.136-2.29-.361-3.378-.501s-2.598-.675-3.356-1.189-1.623-.935-1.922-.935c-.299 0-.547-.225-.55-.5-.005-.358-.106-.342-.359.057-.207.327-.701.467-1.194.338-.463-.121-.841-.078-.841.096 0 .483-1.703.821-2.179.432-.232-.19-3.521-.417-7.311-.507-3.789-.089-7.014-.287-7.166-.439-.399-.399-.857-.341-1.158.146m-.808 3.541c.627 1.015-.287 1.688-1.931 1.421-1.979-.321-2.691-.86-1.844-1.396.766-.483 3.48-.502 3.775-.025m35.072 1.112c1.303.266 1.315.286.35.56-1.734.493-2.8.403-2.8-.236 0-.668.466-.73 2.45-.324m14.885 2.93c.585.531-.471.842-1.928.569-1.424-.267-1.821-.749-.907-1.1.595-.228 2.362.103 2.835.531M191.894 91.7c-.224.652-4.116.638-4.771-.017-.377-.377.11-.483 2.23-.483 1.996 0 2.668.132 2.541.5m62.506 2.7c0 .22-.405.397-.9.394-.728-.005-.785-.08-.3-.394.776-.501 1.2-.501 1.2 0m-82.915.688c1.196.459-.468.9-3.418.906-2.136.004-2.889-.127-2.771-.483.331-.991 4.048-1.245 6.189-.423m9.315.512c-1.456.466-4.4.466-4.4 0 0-.231 1.14-.383 2.7-.36 1.96.029 2.426.127 1.7.36m47 0c-1.783.454-3.4.454-3.4 0 0-.226 1.002-.379 2.3-.353 1.893.039 2.088.102 1.1.353m24 0c-1.119.481-3.703.481-4 0-.155-.252.689-.39 2.276-.372 1.781.02 2.288.129 1.724.372M138 106.029c0 .573-.215.788-.695.696-1.043-.201-1.159-1.525-.134-1.525.572 0 .829.257.829.829m125.669-.167c.903.818.917 1.269.069 2.207-1.279 1.413-3.295.503-3.325-1.502-.024-1.525 1.891-1.94 3.256-.705m8.325 1.638c-.017.838-.776 1.478-1.222 1.032-.254-.254-.341-.658-.194-.897.303-.49 1.425-.597 1.416-.135m-130.527.731c.321.836-.746 1.867-1.596 1.541-1.134-.435-.861-2.172.342-2.172.556 0 1.121.284 1.254.631m133.962-.325c.236.162.546.609.688.994.33.894-1.379.99-2.102.118-.828-.997.294-1.879 1.414-1.112m-141.589.559c.26.42-1.149 1.944-1.784 1.929-.908-.022-1.316-.735-.883-1.543.493-.922 2.184-1.167 2.667-.386m-3.515 2.835c.092.483-.121.7-.69.7-.573 0-1.017.457-1.457 1.5l-.632 1.5-.786-.961c-.927-1.132-.816-1.792.331-1.961.455-.068.923-.487 1.039-.932.264-1.01 1.997-.888 2.195.154m150.883-.29c.73.879.231 1.152-1.905 1.041-2.253-.116-2.555-.331-1.526-1.084 1.02-.745 2.795-.723 3.431.043m5.859.857a1.077 1.077 0 00-.267.666c0 .22.118.282.263.137.145-.145.55-.04.9.233.574.448.579.418.05-.303-.323-.44-.608-.845-.633-.9-.026-.055-.167.02-.313.167M124.8 115.8c0 .811-.197 1-1.042 1h-1.042l.942-.993c1.162-1.225 1.142-1.225 1.142-.007m-12.8 4c-.283.341-.424.709-.314.819.11.11.431-.078.714-.419.283-.341.424-.709.314-.819-.11-.11-.431.078-.714.419m5.44 3.733c.022.697-.158 1.269-.4 1.272-.242.003-.845.114-1.34.247-1.147.307-1.167-.354-.059-1.91 1.032-1.449 1.746-1.294 1.799.391m7.567.344c.512.7-.04 1.723-.929 1.723-.647 0-1.38-1.158-1.135-1.795.31-.808 1.449-.768 2.064.072m-10.791 2.973c.291.917-.315 1.533-1.516 1.544-.719.006-.849.574-.71 3.106.039.715-.122 1.3-.359 1.3s-.431-.608-.431-1.351-.27-1.575-.6-1.849c-.886-.735-.731-1.2.4-1.2.844 0 1-.187 1-1.2 0-1.503 1.762-1.781 2.216-.35m13.784.574c0 .588-.854.789-1.33.313-.362-.362.535-1.381.975-1.109.195.121.355.479.355.796m-19.029 9.037c.97 1.945.374 3.486-1.013 2.62-.495-.309-.873-.205-1.55.426-1.083 1.009-2.008.755-2.008-.55 0-.852.178-.957 1.625-.957 1.308 0 1.611-.137 1.554-.7-.241-2.371.426-2.773 1.392-.839m2.869 6.979c-.194.505-.386.574-.706.254-.242-.242-.32-.752-.174-1.134.194-.505.386-.574.706-.254.242.242.32.752.174 1.134M305.2 143c0 .304-.18.664-.4.8-.228.141-.4-.204-.4-.8 0-.596.172-.941.4-.8.22.136.4.496.4.8m-16 0c0 .33-.18.6-.4.6-.22 0-.4-.27-.4-.6 0-.33.18-.6.4-.6.22 0 .4.27.4.6m-189.8.2c-.16.258-.11.65.11.87.266.266.496.243.69-.07.16-.258.11-.65-.11-.87-.266-.266-.496-.243-.69.07m208.771 6.229c.744.743.829 2.611.149 3.291-.876.876-1.12.501-1.12-1.72 0-2.41.051-2.492.971-1.571M96 157.213c0 2.131-.145 2.868-.6 3.042-.33.127-.604.436-.609.688-.005.251-.361.907-.791 1.457-1.073 1.372-1.088.228-.039-3.034.419-1.301.883-2.951 1.032-3.666.466-2.236 1.007-1.423 1.007 1.513m209.2 1.011c0 1.312-.157 1.776-.6 1.776-.614 0-.906-3.161-.344-3.722.553-.554.944.252.944 1.946m6.67.627c.2 1.001.409 1.149 1.623 1.149 1.166 0 1.347.114 1.113.7-.154.385-.371 1.78-.483 3.1-.503 5.947-2.123 6.286-2.123.443 0-4.1-.014-4.16-1-4.407-.706-.178-1-.523-1-1.177 0-1.854 1.492-1.701 1.87.192m-4.67 2.299c0 1.813-.52 3.445-.838 2.631-.554-1.416-.416-3.381.238-3.381.33 0 .6.338.6.75m-214.78 5.287c.449.84.341 1.761-.451 3.845-.679 1.785-1.286.19-.95-2.495.291-2.33.677-2.702 1.401-1.35m3.574 8.063c.005.835-.186 1.1-.794 1.1-.936 0-.955-.114-.321-1.868.534-1.477 1.105-1.085 1.115.768m221.773-1.457c.348.133.633.568.633.966 0 .399.212.795.471.881.259.087.338.372.176.634-.282.457-3.503.686-3.911.278-.438-.437.191-2.571.806-2.734 1.051-.28 1.159-.281 1.825-.025m-227.433 3.378c-.17 3.185-.989 3.654-1.22.699-.191-2.441.283-4.283.935-3.631.235.235.361 1.524.285 2.932m3.661 1.479c-.009 2.3-.44 3.686-.834 2.679-.573-1.464-.417-4.179.239-4.179.428 0 .598.431.595 1.5m-5.232 11.2c.044 1.705.25 3.16.459 3.233.663.234.457 3.267-.222 3.267-.427 0-.6-.434-.6-1.504 0-1.1-.228-1.646-.851-2.035-1.284-.802-.554-6.061.842-6.061.161 0 .328 1.395.372 3.1m232.937 2.787c-.605.217-.736 16.113-.133 16.113 1.572 0 1.621-.244 1.614-8.003-.008-7.574-.19-8.574-1.481-8.11M89.6 205.976c0 .867-.184 1.69-.408 1.829-.248.153-.319 1.224-.181 2.724.268 2.913-.184 4.816-1.192 5.01-.639.123-.685-.039-.399-1.4.178-.846.336-2.469.352-3.605.015-1.137.163-2.202.328-2.367.165-.165.3-1.08.3-2.034 0-1.274.159-1.733.6-1.733.432 0 .6.442.6 1.576m4.824 4.07c.907 1.78.802 3.305-.257 3.711-1.569.603-2.42-1.509-1.517-3.766.783-1.955.747-1.956 1.774.055m-4.44 8.946c1.405.727 1.589 1.219 1.039 2.786-.938 2.669-1.675 2.932-2.024.722-.746-4.725-.825-4.444.985-3.508M96 220.624c0 1.961-.431 2.238-1.377.887-.816-1.165-.79-2.178.068-2.658 1.029-.576 1.309-.197 1.309 1.771M79.748 222.5c.373 1.394.321 1.5-.748 1.5-.831 0-1 .191-1 1.133 0 1.593-.396 1.81-1.466.805-1.485-1.395-3.334 1.147-3.334 4.585 0 1.319-.698 1.75-1.514.935-.553-.554-.575-.967-.164-3.148.261-1.38.429-2.87.376-3.31-.088-.719.105-.789 1.902-.688 2.8.158 3.522-.104 4.134-1.496.629-1.435 1.475-1.582 1.814-.316m41.412 1.752l1.261.252-1.111.591c-1.095.582-7.955.495-8.94-.113-1.402-.867 5.317-1.425 8.79-.73m123.626 2.732c.398.479.317.618-.451.776-3.807.788-4.619.644-4.094-.724.325-.846 3.853-.887 4.545-.052m-164.857 5.065c-.118 1.235-.253 1.361-1.578 1.472-2.074.173-2.267-.761-.481-2.329 1.638-1.438 2.254-1.181 2.059.857m274.391-1.569c.811.811.537 1.421-.72 1.605-1.092.161-1.2.075-1.2-.954 0-1.222 1.008-1.563 1.92-.651m-237.866.383c1.606.482 1.732.625 1.236 1.405-.312.49-5.101.854-5.535.42-1.564-1.563 1.223-2.746 4.299-1.825M254.45 232c1.987 0 1.249.717-.95.922-1.155.109-3 .38-4.1.605-2.947.601-6.813.836-7.434.452-.909-.562-.187-.817 2.863-1.013 1.603-.103 3.108-.347 3.343-.541.577-.477 2.569-.767 3.978-.579a20.9 20.9 0 002.3.154m97.583 1.967l-.833.833h-47.4c-41.867 0-47.4-.07-47.4-.6s5.547-.601 47.5-.606c28.595-.004 47.734-.154 48.088-.378.932-.59.958-.162.045.751M111.6 234.2c0 .523-2 .6-15.6.6s-15.6-.077-15.6-.6 2-.6 15.6-.6 15.6.077 15.6.6m175.8 26.893c-2.011.384-5.02 1.878-6.001 2.979-1.953 2.191-2.602 7.393-.976 7.818.474.124 1.18.976 1.666 2.011 1.327 2.822 2.074 3.005 13.311 3.272 15.019.355 20.2-.657 20.2-3.947 0-.366.225-.891.5-1.166.681-.681.755-5.553.108-7.103-.771-1.845-5.003-4.338-6.73-3.966-1.624.351-1.925.354-12.478.133-4.84-.101-9.16-.115-9.6-.031m56.683.144c-1.304.266-3.381 1.594-4.773 3.051-.489.512-.984.927-1.1.922-2.009-.091-1.867.812.36 2.287 1.918 1.271 1.918 1.266.111 3.809-.879 1.237.656 3.396 2.259 3.176.582-.08.697-.007.356.226-.382.261-.286.544.4 1.166 1.578 1.434 24.986 1.989 27.79.658 4.639-2.201 7.069-8.684 4.083-10.892-1.553-1.148-1.486-1.258-1.674 2.767-.19 4.059-.845 4.61-2.217 1.863-.964-1.93-1.099-2.886-.462-3.28.229-.141.873-.981 1.431-1.865l1.015-1.607-.931-1.059c-.512-.583-.951-1.109-.976-1.17-.093-.234-24.541-.284-25.672-.052m-100.705 2.4c.965.919.811 1.08-1.29 1.344-1.521.191-1.697.12-1.919-.763-.483-1.925 1.432-2.271 3.209-.581m-124.799.252c.424 1.106-.879 1.711-3.685 1.711-2.189 0-2.534-.097-2.421-.681.254-1.322 5.645-2.23 6.106-1.03m233.22.107c.289.911-.025 1.604-.726 1.604-.264 0-.692.338-.95.751-.608.974-3.665 2.449-5.076 2.449-2.542 0-1.22-2.015 2.553-3.89 3.956-1.968 3.87-1.949 4.199-.914m-101.099 1.25c1.827.679.292 1.954-2.352 1.954-1.707 0-3.948-1.32-3.948-2.325 0-.438 4.901-.149 6.3.371m7.077.043c.866 1.236.777 2.536-.238 3.482-1.218 1.135-1.539.719-1.539-1.995 0-2.614.623-3.135 1.777-1.487m29.98.544c.475 1.237.23 2.157-.745 2.796-.543.356-1.209 1.26-1.48 2.009-1.069 2.957-3.131 1.569-2.133-1.435.954-2.874 3.726-5.017 4.358-3.37M112 266.199c0 .329-.63 1.296-1.4 2.148-.77.853-1.403 1.798-1.406 2.101-.013 1.185-.668 1.643-1.944 1.363-1.568-.344-1.56-.51.149-3.183 1.791-2.799 4.601-4.283 4.601-2.429m15.6 1.201c0 1.088-.821 1.339-1.542.47-.32-.386-.312-.656.032-1 .785-.785 1.51-.53 1.51.53m185.669-.338c1.341 1.214 1.027 4.538-.429 4.538-1.062 0-1.201-.17-1.641-2.005-.722-3.008.241-4.187 2.07-2.533m-7.097 3.684c.454.878.971 1.207 2.21 1.405 1.716.274 1.984.647 1.034 1.435-.985.818-5.816-.886-5.816-2.052 0-1.914 1.718-2.44 2.572-.788m-191.735.074c1.049.561.597 1.18-.861 1.18-.909 0-1.176-.181-1.176-.8 0-.885.812-1.036 2.037-.38m127.761-.021c1.379.525.916 1.201-.822 1.201-.88 0-1.376-.192-1.376-.533 0-1.099.591-1.279 2.198-.668M112.129 272.3c.436.74-.495 2.034-1.311 1.821-1.013-.265-1.362-.769-1.066-1.54.23-.599 2.063-.815 2.377-.281m70.211.33c.464.387-.595.97-1.764.97-1.372 0-1.971-.905-.876-1.325.456-.175 2.304.074 2.64.355m9.66.37c0 1.17-1.737 1.463-2.159.364-.346-.903.053-1.364 1.183-1.364.774 0 .976.206.976 1m33.925-.094c.159.826-.996 1.383-1.605.774s-.052-1.764.774-1.605c.383.074.757.448.831.831m123.025-.587c.671 1.086-1.766 2.119-3.741 1.586-1.822-.491-2.385-1.023-1.606-1.516.726-.458 5.071-.516 5.347-.07m21.05-.05c0 .403-1.275 1.731-1.662 1.731-.4 0-.456-1.349-.071-1.733.347-.348 1.733-.346 1.733.002m-133.2.707c0 .858-.608 1.077-1.766.637-1.475-.561-1.278-1.213.366-1.213.952 0 1.4.184 1.4.576M288 273c0 .366-.373.6-.957.6-.527 0-1.061-.27-1.188-.6-.172-.45.066-.6.958-.6.788 0 1.187.201 1.187.6m-101.4 5c0 2.2-1.652 2.274-1.861.083-.138-1.448-.076-1.558.856-1.522.874.034 1.005.221 1.005 1.439m44.6-.464c0 .836-.275 1.261-1.045 1.612-1.899.865-2.97-.932-1.266-2.125 1.427-1 2.311-.803 2.311.513m-6.345 7.074l-.324 1.19-.197-1.302c-.207-1.374.001-1.923.529-1.395.174.174.17.852-.008 1.507m2.668 7.308c-.139 1.188-2.623 2.077-3.212 1.151-.554-.87-.327-3.396.367-4.09.92-.92 3.041 1.27 2.845 2.939m-36.023-.72c.611.002.692 3.036.09 3.408-1.536.95-3.59-.991-3.59-3.392 0-2.256.352-2.499 1.737-1.201.695.651 1.488 1.184 1.763 1.185m34.411 7.425c1.138.797 1.122.974-.257 2.709-1.364 1.716-1.654 1.552-1.654-.932 0-2.535.356-2.866 1.911-1.777m-36.42 1.352c.417.666.323.812-.768 1.192-1.89.659-3.124.553-3.117-.267.018-1.994 2.803-2.658 3.885-.925m41.658 1.389c.579 2.299.589 2.236-.349 2.236-.44 0-.8-.255-.8-.568 0-.312-.301-1.091-.669-1.732-.367-.641-.55-1.473-.406-1.85.45-1.171 1.723-.076 2.224 1.914m80.922 3.584c-.07.412.089 1.272.354 1.913.725 1.75.149 1.84-1.422.223-1.948-2.006-1.792-3.167.397-2.96.542.052.759.317.671.824M215.9 304.7c-4.345.064-11.455.064-15.8 0-4.345-.065-.79-.118 7.9-.118 8.69 0 12.245.053 7.9.118m-87.647 1.895c.44 1.147-.421 3.605-1.263 3.605-1.071 0-1.215-1.215-.337-2.846.792-1.471 1.245-1.686 1.6-.759m183.964 2.577a.45.45 0 00.159.613c.752.465-1.108 3.415-2.153 3.415-.719 0-3.423-1.99-3.417-2.514.015-1.212.566-1.436 2.357-.958 1.544.413 1.805.385 2.193-.23.242-.384.586-.698.766-.698.179 0 .222.168.095.372m-168.45 3.771c-.139.361-.503.657-.81.657-.808 0-.685-1.113.143-1.297.909-.202.968-.146.667.64M130.2 312.8c-.136.22-.597.4-1.024.4-.427 0-.776-.18-.776-.4 0-.22.461-.4 1.024-.4.58 0 .916.173.776.4"
        ></path>
      </g>
    </svg>
  );
};
