export default {
  async fetch(request, environment, context) {
    const url = new URL(request.url);

    switch (pathname) {
      case "/_worker/hello":
        return Respond("Hello, world!");
      case "/keys":
        return Respond("ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC0kwVbA9ZdXOAuiyPeXsJ7HSujPtCIYtFPl2GdajHDT0SwsZDUMNr/p6Y9DyQjOI1zqD73ndGSOIe6EY7adB3L6ZSODvDwFlGMtP5sXE0UESOcJJdU7m4wHWieM3xal5nz1Y2BJyp2x04Ol5+kpak9A4MqUcHz29Z4ubgPG/UUWENoKZIfHXSCZfvJBO82InrvieAu/dpKzmtkXNJ9bP+fSkiNnCOVo+ZvCbIuZm8tOoQIhshzdeVhfNmdUj9LNErkoGoJ+CA13eXYlqT9B8o45E+M8lLxQr/RpzCk/3likszBzVqITB6Vkrvey8BcHhcbrs+5LYbxvb6s+1bsRHNAwO+w7SgrD3eX8AQqFKvb6xzrFji+996NWSC2hVLcKZyDvSM2p6ws4IDLFLD64IS+73SEZv2fN847j0vmqJqXYPpB/jQKuUG+rWeonkDXBfPjFrHtp75nk5bSBBDi+LQBGW52nz6/gtOWP46USV46BW2zF+YFSyw/2Ta7DMhrvXlLWuDV/CpK0FytpHjQWjHoiDfrZfiDAOu8sPIiH7hjZevHqzNJ+xOZDNqNbYqxxB1gLeK4u6xX9c4Jkk259r09tMutFACbzxxPQr3LYBKW8IrPcX1rfuE4+aZ1UysfjG/2FmKOPeWca9tVSQUK7RSThvzWDGdm0gXxI0HrPwmfZQ==");
    }

    return environment.ASSETS.fetch(request);
  },
};

function Respond(response, options = {}) {
  if (typeof response === "string")
    response = JSON.stringify({ message: response });

  return new Response(response, options);
}
