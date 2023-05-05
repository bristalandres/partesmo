package unpsjb.labprog.backend.business;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import unpsjb.labprog.backend.model.Empresa;

@Service
public class EmpresaService {
    
    @Autowired
    EmpresaRepository repository;

    public List<Empresa> findAll(){
        List<Empresa> result = new ArrayList<>();
        repository.findAll().forEach(e -> result.add(e));
        return result;
    }

    public Empresa findById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Empresa findByCuit(String cuit) {
        return repository.findByCuit(cuit).orElse(null);
    }
 
    @Transactional
    public Empresa save(Empresa aEmpresa) {
        return repository.save(aEmpresa);
    }

}


