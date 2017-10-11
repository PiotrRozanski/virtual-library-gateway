package pl.piotrrozanski.jhipster.application.repository;

import pl.piotrrozanski.jhipster.application.domain.Authority;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Spring Data MongoDB repository for the Authority entity.
 */
public interface AuthorityRepository extends MongoRepository<Authority, String> {
}
