/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.curious.model;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 *
 * @author Sangeet
 */
@Entity
@Table(name = "choices")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Choices.findAll", query = "SELECT c FROM Choices c")
    , @NamedQuery(name = "Choices.findById", query = "SELECT c FROM Choices c WHERE c.id = :id")
    , @NamedQuery(name = "Choices.findByChoice", query = "SELECT c FROM Choices c WHERE c.choice = :choice")
    , @NamedQuery(name = "Choices.findByIscorrect", query = "SELECT c FROM Choices c WHERE c.iscorrect = :iscorrect")
    , @NamedQuery(name = "Choices.findByDisplay", query = "SELECT c FROM Choices c WHERE c.display = :display")})
public class Choices implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "choice")
    private String choice;
    @Column(name = "iscorrect")
    private String iscorrect;
    @Column(name = "display")
    private String display;
    @JoinColumn(name = "questionid", referencedColumnName = "id")
    @ManyToOne
    @JsonIgnore
    private Questions questionid;

    public Choices() {
    }

    public Choices(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getChoice() {
        return choice;
    }

    public void setChoice(String choice) {
        this.choice = choice;
    }

    public String getIscorrect() {
        return iscorrect;
    }

    public void setIscorrect(String iscorrect) {
        this.iscorrect = iscorrect;
    }

    public String getDisplay() {
        return display;
    }

    public void setDisplay(String display) {
        this.display = display;
    }

//    public Questions getQuestionid() {
//        return questionid;
//    }
//
//    public void setQuestionid(Questions questionid) {
//        this.questionid = questionid;
//    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Choices)) {
            return false;
        }
        Choices other = (Choices) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.curious.model.Choices[ id=" + id + " ]";
    }
    
}
