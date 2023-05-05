package unpsjb.labprog.backend.presenter;

import unpsjb.labprog.backend.Response;
import unpsjb.labprog.backend.business.EmpresaService;
import unpsjb.labprog.backend.model.Empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("empresas")
public class EmpresaPresenter {

  @Autowired
  EmpresaService service;

  @RequestMapping(method = RequestMethod.GET)
  public ResponseEntity<Object> findAll() {
    return Response.ok(service.findAll());
  }

  @RequestMapping(value = "/id/{id}", method = RequestMethod.GET)
  public ResponseEntity<Object> findById(@PathVariable("id") int id) {
    Empresa aEmpresaOrNull = service.findById(id);
    return (aEmpresaOrNull != null) ? Response.ok(aEmpresaOrNull) : Response.notFound();
  }

  @RequestMapping(value = "/{cuit}", method = RequestMethod.GET)
  public ResponseEntity<Object> findByCuit(@PathVariable("cuit") String cuit) {
    Empresa aEmpresaOrNull = service.findByCuit(cuit);
    return (aEmpresaOrNull != null) ? Response.ok(aEmpresaOrNull, "Empresa recuperada correctamente")
        : Response.notFound("Empresa no existe");
  }

  @RequestMapping(method = {RequestMethod.PUT, RequestMethod.POST})
  public ResponseEntity<Object> save(@RequestBody Empresa aEmpresa) {
    return Response.ok(
        service.save(aEmpresa),
        "Empresa actualizada correctamente");
  }

}
