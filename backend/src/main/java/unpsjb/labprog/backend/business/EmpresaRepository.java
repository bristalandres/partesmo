package unpsjb.labprog.backend.business;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import unpsjb.labprog.backend.model.Empresa;


@Repository
public interface EmpresaRepository extends CrudRepository<Empresa, Integer>{

    @Query("SELECT e FROM Empresa e WHERE e.cuit = ?1")
    Optional<Empresa> findByCuit(String cuit);

}