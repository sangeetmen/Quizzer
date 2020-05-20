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
@Table(name = "pointslog")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Pointslog.findAll", query = "SELECT p FROM Pointslog p")
    , @NamedQuery(name = "Pointslog.findById", query = "SELECT p FROM Pointslog p WHERE p.id = :id")
    , @NamedQuery(name = "Pointslog.findByChoiceid", query = "SELECT p FROM Pointslog p WHERE p.choiceid = :choiceid")
    , @NamedQuery(name = "Pointslog.findByPointsearned", query = "SELECT p FROM Pointslog p WHERE p.pointsearned = :pointsearned")
    , @NamedQuery(name = "Pointslog.findByTotalpoints", query = "SELECT p FROM Pointslog p WHERE p.totalpoints = :totalpoints")})
public class Pointslog implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "choiceid")
    private Integer choiceid;
    @Column(name = "pointsearned")
    private Integer pointsearned;
    @Column(name = "totalpoints")
    private Integer totalpoints;
    @JoinColumn(name = "gameid", referencedColumnName = "id")
    @ManyToOne
    @JsonIgnore
    private Game gameid;
    @JoinColumn(name = "questionid", referencedColumnName = "id")
    @ManyToOne
    @JsonIgnore
    private Questions questionid;
    @JoinColumn(name = "teamid", referencedColumnName = "id")
    @ManyToOne
    @JsonIgnore
    private Teams teamid;

    public Pointslog() {
    }

    public Pointslog(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getChoiceid() {
        return choiceid;
    }

    public void setChoiceid(Integer choiceid) {
        this.choiceid = choiceid;
    }

    public Integer getPointsearned() {
        return pointsearned;
    }

    public void setPointsearned(Integer pointsearned) {
        this.pointsearned = pointsearned;
    }

    public Integer getTotalpoints() {
        return totalpoints;
    }

    public void setTotalpoints(Integer totalpoints) {
        this.totalpoints = totalpoints;
    }

    public Game getGameid() {
        return gameid;
    }

    public void setGameid(Game gameid) {
        this.gameid = gameid;
    }

    public Questions getQuestionid() {
        return questionid;
    }

    public void setQuestionid(Questions questionid) {
        this.questionid = questionid;
    }

    public Teams getTeamid() {
        return teamid;
    }

    public void setTeamid(Teams teamid) {
        this.teamid = teamid;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Pointslog)) {
            return false;
        }
        Pointslog other = (Pointslog) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.curious.model.Pointslog[ id=" + id + " ]";
    }
    
}
